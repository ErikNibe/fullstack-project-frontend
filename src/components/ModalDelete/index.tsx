import { useClient } from "../../hooks/useClient";
import { Button } from "../../styles/Button";
import { Modal } from "../Modal";
import { ContentModal } from "./styles";

interface iModalDeleteProps {
  toggleModal: () => void;
  modalType: string | null;
  contactId: string | null;
}

export const ModalDelete = ({
  toggleModal,
  modalType,
  contactId,
}: iModalDeleteProps) => {
  const { deleteClient, deleteContact } = useClient();

  return (
    <Modal toggleModal={toggleModal}>
      <ContentModal>
        <h2>
          {modalType === "delete-client" ? "Deletar conta" : "Deletar contato"}
        </h2>

        <p>
          {modalType === "delete-client"
            ? "Você tem certeza que desaje deletar seu perfil?"
            : "Você tem certeza que desaje deletar esse contato?"}
        </p>

        <Button
          btnColor="red"
          btnSize="big"
          onClick={() => {
            if (modalType === "delete-client") {
              deleteClient();
            } else if (modalType === "delete-contact" && contactId) {
              deleteContact(contactId);
            }
            toggleModal();
          }}
        >
          Deletar
        </Button>

        <Button
          type="button"
          btnColor="gray"
          btnSize="big"
          onClick={toggleModal}
        >
          Cancelar
        </Button>
      </ContentModal>
    </Modal>
  );
};
