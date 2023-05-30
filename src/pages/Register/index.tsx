import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { FormContainer } from "../../styles/FormContainer";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "../../styles/Link";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./schemas";
import { tRegisterRequest } from "./interfaces";
import { ErrorMessage } from "../../styles/ErrorMessage";
import { useClient } from "../../hooks/useClient";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegisterRequest>({
    resolver: zodResolver(registerSchema),
  });

  const { registerClient } = useClient();

  const submit: SubmitHandler<tRegisterRequest> = async (
    data: tRegisterRequest
  ) => {
    registerClient(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(submit)}>
      <h2>Cadastro</h2>

      <Input
        type="text"
        label="Nome completo"
        register={register("fullName")}
      />
      {errors.fullName && (
        <ErrorMessage>{errors.fullName.message}</ErrorMessage>
      )}

      <Input type="email" label="Email" register={register("email")} />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <Input type="password" label="Senha" register={register("password")} />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}

      <Input type="text" label="Telefone" register={register("phone")} />
      {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}

      <Button type="submit" btnColor="blue" btnSize="big">
        Cadastrar-se
      </Button>

      <span>Já possui conta?</span>

      <Link to={"/"}>Ir para o login</Link>
    </FormContainer>
  );
};
