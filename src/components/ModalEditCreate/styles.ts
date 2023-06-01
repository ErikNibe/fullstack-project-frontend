import styled from "styled-components";

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > h2 {
    text-align: center;
  }

  & > div {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }
`;
