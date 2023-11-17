import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import View, { IActionButtons } from "../containers/View/View";
import {
  faAdd,
  faClose,
  faEdit,
  faGear,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
    Tooltip,
  Typography,
} from "@mui/material";
import { IAuthUserSchool } from "../interfaces/authUser.interface";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../reducers/rootReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInputText from "../components/FormComponents/FormInputText";
import { updateSchoolInfo } from "../services/Api";
import toast from "react-hot-toast";
import { setSchoolInfo } from "../slices/authSlice";

interface ISchoolFormData {
  name: string;
  address: string;
  phone: string;
}

function Settings() {
  const { 
    setValue, 
    control, 
    handleSubmit, 
    reset,
    formState: {
      errors, 
      dirtyFields
    }, 
   } = useForm<ISchoolFormData>({
    mode:"onChange"
  });

  const dispatch = useDispatch();

  const [isEditInformation, setIsEditInformation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const schoolInfo: IAuthUserSchool | undefined = useSelector(
    (state: IRootState) => state.auth?.user?.school
  );

  useEffect(() => {
    if (!schoolInfo || !setValue) return;
    setValue("name", schoolInfo?.name ?? "");
    setValue("address", schoolInfo?.address ?? "");
    setValue("phone", schoolInfo?.phone ?? "");
  }, [schoolInfo, setValue, reset]);

  const actions: IActionButtons[] = [
    {
      label: "Tipo de horario",
      icon: faAdd,
      onClick: () => {},
    },
  ];

  const handleEditButtonClick = () => {
    setIsEditInformation(!isEditInformation);
  };

  const handleOnSubmitSchoolInformation: SubmitHandler<ISchoolFormData> = async (
    data: ISchoolFormData
  ) => {
    try {
      if(Object.keys(dirtyFields).length > 0){
        setIsLoading(true);
        await updateSchoolInfo(schoolInfo?.id ?? '', data)
        setIsLoading(false);
        toast.success('Información actualizada correctamente');
        dispatch(setSchoolInfo(data));
        reset(data);
      }
      handleEditButtonClick();
    } catch (error) {
      setIsLoading(false);
      toast.error('Ocurrió un error al actualizar la información de la escuela');
      console.error(error);
    }
  };

  const handleCancelEdition = () => {
    setIsEditInformation(false);
  }

  return (
    <View
      title="Configuración"
      icon={faGear}
      description="Maneja los tipos de horarios de tu escuela asi como su información."
      actions={actions}
    >
      {schoolInfo && (
        <Card>
          <CardHeader
            title="Información de la escuela"
            action={
              isEditInformation ? (
                <>
                  <Tooltip title="Cancelar">
                    <IconButton onClick={handleCancelEdition}>
                      <FontAwesomeIcon icon={faClose} />
                    </IconButton>
                  </Tooltip>
                  <Button
                    startIcon={<FontAwesomeIcon icon={faSave} />}
                    disabled={Object.keys(errors).length > 0 || isLoading}
                    onClick={handleSubmit(handleOnSubmitSchoolInformation)}
                  >
                    Guardar
                  </Button>
                </>
              ) : (
                <Tooltip title="Editar">
                  <IconButton onClick={handleEditButtonClick}>
                    <FontAwesomeIcon icon={faEdit} />
                  </IconButton>
                </Tooltip>
              )
            }
          />
          <Divider />
          <CardContent>
            {!isEditInformation ? (
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    style={{ textDecoration: "underline" }}
                    variant="subtitle2"
                  >
                    Nombre
                  </Typography>
                  <Typography variant="body2">{schoolInfo.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    style={{ textDecoration: "underline" }}
                    variant="subtitle2"
                  >
                    Dirección
                  </Typography>
                  <Typography variant="body2">{schoolInfo.address}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    style={{ textDecoration: "underline" }}
                    variant="subtitle2"
                  >
                    Teléfono
                  </Typography>
                  <Typography variant="body2">{schoolInfo.phone}</Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid container rowSpacing={2} columnSpacing={1}>
                <Grid item xs={12} sm={6}>
                  <FormInputText name="name" label="Nombre" control={control} rules={{
                      required: "El nombre de la escuela es requerido",
                      minLength: {
                        value: 3,
                        message:
                          "El nombre de la escuela debe tener al menos 3 caracteres",
                      },
                    }}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormInputText
                    name="address"
                    label="Dirección"
                    control={control}
                    rules={{
                      required: "la dirección de la escuela es requerida",
                      minLength: {
                        value: 3,
                        message:
                          "la dirección de la escuela debe tener al menos 3 caracteres",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormInputText
                    name="phone"
                    label="Teléfono"
                    control={control}
                    rules={{
                      required: "El teléfono de la escuela es requerido",
                      minLength: {
                        value: 3,
                        message:
                          "El teléfono de la escuela debe tener al menos 3 caracteres",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      )}
    </View>
  );
}

export default Settings;
