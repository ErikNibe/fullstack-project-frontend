import { useClient } from "../../hooks/useClient";
import { Button } from "../../styles/Button";
import { Logo } from "../../styles/Logo";
import { ContentContainer, Header, Main, Navbar, Table } from "./styles";

export const Dashboard = () => {
  const { client } = useClient();

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
              <tr>
                <td>Fulano</td>
                <td>fulano@mail.com</td>
                <td>11 97762-8811</td>
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
            </tbody>
          </Table>
        </ContentContainer>
      </Main>
    </>
  );
};
