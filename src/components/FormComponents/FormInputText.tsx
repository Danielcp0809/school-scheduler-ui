import React from "react";
import { IFormInputProps } from "../../interfaces/formInput.interface";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FormInputText({ name, label, control, rules }: IFormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
}

export default FormInputText;
