import { UseFormRegisterReturn } from "react-hook-form";
import { InputContainer } from "./styles";

interface iInputProps {
  type: string;
  label: string;
  register: UseFormRegisterReturn;
}

export const Input = ({ type, label, register }: iInputProps) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <input type={type} {...register} />
    </InputContainer>
  );
};
