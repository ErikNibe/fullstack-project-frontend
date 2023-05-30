import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 200px auto;
  padding: 30px 20px;
  width: 370px;

  border-radius: 4px;

  background-color: var(--color-white);

  color: var(--color-gray-900);

  & > h2,
  span {
    text-align: center;

    font-weight: bold;
  }

  span {
    font-weight: 700;
    font-size: 14px;
    color: var(--color-gray-700);
  }
`;
