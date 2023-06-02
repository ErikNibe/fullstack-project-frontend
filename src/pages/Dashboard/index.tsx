import { useEffect, useState } from "react";
import { useClient } from "../../hooks/useClient";
import { Button } from "../../styles/Button";
import { Logo } from "../../styles/Logo";
import { ContentContainer, Header, Main, Navbar, Table } from "./styles";
import { ModalEditCreate } from "../../components/ModalEditCreate";
import { ModalDelete } from "../../components/ModalDelete";
import { pdfReport } from "../../reports";

export const Dashboard = () => {
  const { client, setClient, listContacts, contacts } = useClient();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const [contactId, setContactId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      listContacts();
    })();
  }, [listContacts]);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleLogout = () => {
    localStorage.removeItem("client-contacts:token");

    setClient(null);
  };

  return (
    <>
      {isOpenModal && modal === "edit-create" && (
        <ModalEditCreate
          toggleModal={toggleModal}
          modalType={modalType}
          contactId={contactId}
        />
      )}
      {isOpenModal && modal === "delete" && (
        <ModalDelete
          toggleModal={toggleModal}
          modalType={modalType}
          contactId={contactId}
        />
      )}
      <Navbar>
        <ContentContainer>
          <Logo>Kenzie Contacts</Logo>

          <Button btnColor="gray" btnSize="small" onClick={handleLogout}>
            Sair
          </Button>
        </ContentContainer>
      </Navbar>

      <Header>
        <ContentContainer>
          <p>Olá, {client?.fullName}</p>

          <div>
            <Button
              btnColor="gray"
              btnSize="small"
              onClick={() => {
                setModalType("edit-client");
                setModal("edit-create");
                toggleModal();
              }}
            >
              Editar perfil
            </Button>

            <Button
              btnColor="red"
              btnSize="small"
              onClick={() => {
                setModalType("delete-client");
                setModal("delete");
                toggleModal();
              }}
            >
              Deletar perfil
            </Button>
          </div>
        </ContentContainer>
      </Header>

      <Main>
        <ContentContainer>
          <h2>Contatos</h2>

          <div>
            <Button
              btnColor="red"
              btnSize="small"
              onClick={() => pdfReport(client, contacts)}
            >
              Baixar pdf
            </Button>

            <Button
              btnColor="gray"
              btnSize="add"
              onClick={() => {
                setModalType("create-contact");
                setModal("edit-create");
                toggleModal();
              }}
            >
              +
            </Button>
          </div>
        </ContentContainer>

        <ContentContainer>
          <Table>
            <thead>
              <tr>
                <th>Nome Completo</th>
                <th>email</th>
                <th>Telefone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 &&
                contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.fullName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <div>
                        <Button
                          btnSize="small"
                          btnColor="blue"
                          onClick={() => {
                            setModalType("edit-contact");
                            setModal("edit-create");
                            setContactId(contact.id);
                            toggleModal();
                          }}
                        >
                          editar
                        </Button>
                        <Button
                          btnSize="small"
                          btnColor="red"
                          onClick={() => {
                            setModalType("delete-contact");
                            setModal("delete");
                            setContactId(contact.id);
                            toggleModal();
                          }}
                        >
                          excluir
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </ContentContainer>
      </Main>
    </>
  );
};
