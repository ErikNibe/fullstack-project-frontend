import { useEffect, useState } from "react";
import { useClient } from "../../hooks/useClient";
import { Button } from "../../styles/Button";
import { Logo } from "../../styles/Logo";
import { ContentContainer, Header, Main, Navbar, Table } from "./styles";
import { iContact } from "../../providers/types";
import { api } from "../../services/api";

export const Dashboard = () => {
  const { client } = useClient();

  const [contacts, setContacts] = useState<iContact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("contacts");

      setContacts(response.data);
    })();
  }, []);

  return (
    <>
      <Navbar>
        <ContentContainer>
          <Logo>Kenzie Contacts</Logo>

          <Button btnColor="gray" btnSize="small">
            Sair
          </Button>
        </ContentContainer>
      </Navbar>

      <Header>
        <ContentContainer>
          <p>Olá, {client?.fullName}</p>

          <Button btnColor="gray" btnSize="small">
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
