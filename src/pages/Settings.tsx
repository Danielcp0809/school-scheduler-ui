import React from "react";
import View, { IActionButtons } from "../containers/View/View";
import { faAdd, faGear } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { IAuthUserSchool } from "../interfaces/authUser.interface";
import { useSelector } from "react-redux";
import { IRootState } from "../reducers/rootReducer";

function Settings() {

  const schoolInfo: IAuthUserSchool | undefined = useSelector((state: IRootState) => state.auth?.user?.school);

  const actions: IActionButtons[] = [
    {
      label: "Tipo de horario",
      icon: faAdd,
      onClick: () => {},
    },
    {
        label: "Tipo de horario",
        icon: faAdd,
        onClick: () => {},
      },
      {
        label: "Tipo de horario",
        icon: faAdd,
        onClick: () => {},
      },
  ];
  return (
    <View
      title="Configuración"
      icon={faGear}
      description="Maneja los tipos de horarios de tu escuela asi como su información."
      actions={actions}
    >
      {schoolInfo && <Card>
        <CardHeader title="Información de la escuela" />
        <Divider />
        <CardContent>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Nombre</Typography>
                    <Typography variant="body2">{schoolInfo.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Dirección</Typography>
                    <Typography variant="body2">{schoolInfo.address}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Teléfono</Typography>
                    <Typography variant="body2">{schoolInfo.phone}</Typography>
                </Grid>
            </Grid>
        </CardContent>
      </Card>}
    </View>
  );
}

export default Settings;
