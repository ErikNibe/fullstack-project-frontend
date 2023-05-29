import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { FormContainer } from "../../styles/FormContainer";
import { useForm } from "react-hook-form";
import { Link } from "../../styles/Link";

export const Register = () => {
  const { register } = useForm();
  return (
    <FormContainer>
      <h2>Cadastro</h2>

      <Input
        type="text"
        label="Nome completo"
        register={register("fullName")}
      />

      <Input type="email" label="Email" register={register("email")} />

      <Input type="password" label="Senha" register={register("password")} />

      <Input type="text" label="Telefone" register={register("phone")} />

      <Button btnColor="blue" btnSize="big">
        Cadastrar-se
      </Button>

      <span>Já possui conta?</span>

      <Link to={"/"}>Ir para o login</Link>
    </FormContainer>
  );
};
