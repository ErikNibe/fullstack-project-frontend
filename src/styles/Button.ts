import styled, { css } from "styled-components";

interface iButtonProps {
  btnSize: string;
  btnColor: string;
}

export const Button = styled.button<iButtonProps>`
  border: none;
  border-radius: 8px;

  font-weight: 700;

  ${({ btnSize }) => {
    switch (btnSize) {
      case "big":
        return css`
          height: 40px;
          padding: 0 20px;

          font-size: 16px;
        `;
    }
  }}

  ${({ btnColor }) => {
    switch (btnColor) {
      case "blue":
        return css`
          background-color: var(--color-blue-300);

          &:hover {
            background-color: var(--color-blue-700);
            color: var(--color-white);
          }
        `;
      //   case "gray":
      //     return css`
      //       background-color: var(--color-gray-400);

      //       &:hover {
      //         background-color: var(--color-gray-700);
      //       }
      //     `;
    }
  }}
`;
