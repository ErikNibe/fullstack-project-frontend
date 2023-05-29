import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { FormContainer } from "../../styles/FormContainer";
import { useForm } from "react-hook-form";
import { Link } from "../../styles/Link";

export const Login = () => {
  const { register } = useForm();

  return (
    <FormContainer>
      <h2>Login</h2>

      <Input type="email" label="Email" register={register("email")} />

      <Input type="password" label="Senha" register={register("password")} />

      <Button btnColor="blue" btnSize="big">
        Entrar
      </Button>

      <span>Ainda não possui uma conta?</span>

      <Link to={"/register"}>Cadastre-se</Link>
    </FormContainer>
  );
};
