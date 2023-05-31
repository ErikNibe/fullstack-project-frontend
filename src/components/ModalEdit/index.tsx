import { Button } from "../../styles/Button";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormModal } from "./styles";
import { tUpdate } from "./interfaces";

interface iModalEditClientPorps {
  toggleModal: () => void;
  modalType: string;
  editFunction: (data: tUpdate) => void;
}

export const ModalEditClient = ({
  toggleModal,
  modalType,
  editFunction,
}: iModalEditClientPorps) => {
  const { register, handleSubmit } = useForm<tUpdate>();

  const removeEmptyProperties = (obj: tUpdate) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
  };

  const submit: SubmitHandler<tUpdate> = async (data: tUpdate) => {
    const newData = removeEmptyProperties(data);

    editFunction(newData);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <FormModal onSubmit={handleSubmit(submit)}>
        <h2>
          {modalType === "edit-client" ? "Editar Perfil" : "Editar contato"}
        </h2>

        <span>Obs.: Preencha apenas os campos que você quer alterar</span>

        <Input
          type="text"
          label="Nome completo"
          register={register("fullName")}
        />

        <Input type="email" label="Email" register={register("email")} />

        <Input type="password" label="Senha" register={register("password")} />

        <Input type="text" label="Telefone" register={register("phone")} />

        <div>
          <Button btnColor="blue" btnSize="big">
            Confirmar
          </Button>

          <Button btnColor="red" btnSize="big">
            Cancelar
          </Button>
        </div>
      </FormModal>
    </Modal>
  );
};
