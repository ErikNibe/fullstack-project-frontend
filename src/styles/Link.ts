import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Link = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 0 20px;

  border: none;
  border-radius: 8px;

  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  color: var(--color-gray-900);

  background-color: var(--color-gray-400);

  &:hover {
    background-color: var(--color-gray-700);
    color: var(--color-gray-200);
  }
`;
