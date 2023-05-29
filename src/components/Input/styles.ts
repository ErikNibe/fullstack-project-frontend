import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-weight: 600;

  & > input {
    width: 100%;
    height: 40px;

    padding: 20px 15px;

    border: 2px solid var(--color-blue-500);
    border-radius: 8px;
    outline: none;
  }

  & > input:focus {
    border: 2px solid var(--color-gray-900);
    background-color: var(--color-blue-500);
  }
`;
