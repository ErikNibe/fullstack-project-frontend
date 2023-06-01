import { Button } from "../../styles/Button";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormModal } from "./styles";
import { tUpdate } from "./interfaces";
import { useClient } from "../../hooks/useClient";
import { iCreateContact } from "../../providers/types";

interface iModalEditClientPorps {
  toggleModal: () => void;
  modalType: string | null;
  contactId: string | null;
}

export const ModalEditCreate = ({
  toggleModal,
  modalType,
  contactId,
}: iModalEditClientPorps) => {
  const { register, handleSubmit } = useForm<tUpdate>();
  const { updateClient, updateContact, createContact } = useClient();

  const removeEmptyProperties = (obj: tUpdate) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
  };

  const submit: SubmitHandler<tUpdate> = async (
    data: tUpdate | iCreateContact
  ) => {
    const newData = removeEmptyProperties(data);

    if (modalType === "edit-client") {
      updateClient(newData);
    } else if (modalType === "edit-contact" && contactId) {
      updateContact(newData, contactId);
    } else if (modalType === "create-contact") {
      createContact(data as iCreateContact);
    }

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <FormModal onSubmit={handleSubmit(submit)}>
        <h2>
          {modalType === "edit-client"
            ? "Editar Perfil"
            : modalType === "edit-contact"
            ? "Editar contato"
            : "Criar contato"}
        </h2>

        {modalType !== "create-contact" && (
          <span>Obs.: Preencha apenas os campos que você quer alterar</span>
        )}

        <Input
          type="text"
          label="Nome completo"
          register={register("fullName")}
          isRequired={modalType != "create-contact" && false}
        />

        <Input
          type="email"
          label="Email"
          register={register("email")}
          isRequired={modalType != "create-contact" && false}
        />

        {modalType == "edit-client" && (
          <Input
            type="password"
            label="Senha"
            register={register("password")}
            isRequired={false}
          />
        )}

        <Input
          type="text"
          label="Telefone"
          register={register("phone")}
          isRequired={modalType != "create-contact" && false}
        />

        <div>
          <Button type="submit" btnColor="blue" btnSize="big">
            Confirmar
          </Button>

          <Button
            type="button"
            btnColor="red"
            btnSize="big"
            onClick={toggleModal}
          >
            Cancelar
          </Button>
        </div>
      </FormModal>
    </Modal>
  );
};
