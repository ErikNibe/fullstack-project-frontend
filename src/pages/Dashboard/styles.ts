import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  max-width: 1000px;
  min-height: 100px;

  overflow-x: auto;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1.5px solid var(--color-gray-900);
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1.5px solid var(--color-gray-900);
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;

  background-color: var(--color-white);
  color: black;

  th,
  td {
    min-width: max-content;
    border: 1px solid black;
    padding: 10px;
  }

  td > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
  }
`;
