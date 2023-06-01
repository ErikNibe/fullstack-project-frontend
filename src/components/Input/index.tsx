import { UseFormRegisterReturn } from "react-hook-form";
import { InputContainer } from "./styles";

interface iInputProps {
  type: string;
  label: string;
  register: UseFormRegisterReturn;
  isRequired?: boolean;
}

export const Input = ({
  type,
  label,
  register,
  isRequired = true,
}: iInputProps) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <input type={type} {...register} required={isRequired} />
    </InputContainer>
  );
};
