import { useEffect, useState } from "react";
import { useClient } from "../../hooks/useClient";
import { Button } from "../../styles/Button";
import { Logo } from "../../styles/Logo";
import { ContentContainer, Header, Main, Navbar, Table } from "./styles";
import { iContact } from "../../providers/types";
import { api } from "../../services/api";
import { ModalEditClient } from "../../components/ModalEdit";

export const Dashboard = () => {
  const { client, setClient, updateClient } = useClient();

  const [contacts, setContacts] = useState<iContact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const response = await api.get("contacts");

      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleLogout = () => {
    localStorage.removeItem("client-contacts:token");

    setClient(null);
  };

  return (
    <>
      {isOpenModal && modalType == "edit-client" && (
        <ModalEditClient
          toggleModal={toggleModal}
          modalType={modalType}
          editFunction={updateClient}
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

          <Button
            btnColor="gray"
            btnSize="small"
            onClick={() => {
              setModalType("edit-client");
              toggleModal();
            }}
          >
            Editar perfil
          </Button>
        </ContentContainer>
      </Header>

      <Main>
        <ContentContainer>
          <h2>Contatos</h2>

          <div>
            <Button btnColor="red" btnSize="small">
              Baixar pdf
            </Button>

            <Button btnColor="gray" btnSize="add">
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
                        <Button btnSize="small" btnColor="blue">
                          editar
                        </Button>
                        <Button btnSize="small" btnColor="red">
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
