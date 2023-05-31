import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { FormContainer } from "../../styles/FormContainer";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "../../styles/Link";
import { tLoginRequest } from "./interfaces";
import { useClient } from "../../hooks/useClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schemas";
import { ErrorMessage } from "../../styles/ErrorMessage";
import { Container } from "../../styles/Container";
import { Logo } from "../../styles/Logo";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const { singIn, requesting } = useClient();

  const submit: SubmitHandler<tLoginRequest> = async (data: tLoginRequest) => {
    singIn(data);
  };

  return (
    <Container>
      <Logo>Kenzie Contacts</Logo>

      <FormContainer onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>

        <Input type="email" label="Email" register={register("email")} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input type="password" label="Senha" register={register("password")} />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <Button type="submit" btnColor="blue" btnSize="big">
          {requesting ? "Entrando..." : "Entrar"}
        </Button>

        <span>Ainda não possui uma conta?</span>

        <Link to={"/register"}>Cadastre-se</Link>
      </FormContainer>
    </Container>
  );
};
