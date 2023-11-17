import { RegisterOptions } from "react-hook-form";

export interface IFormInputProps {
    name: string;
    control?: any;
    label: string;
    setValue?: any;
    rules?: RegisterOptions
  }