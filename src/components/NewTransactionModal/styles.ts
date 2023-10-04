import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  padding: 2.5rem 3rem;
  min-width: 32rem;

  border-radius: 6px;
  background: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      padding: 1rem;
      border-radius: 6px;
      color: ${(props) => props.theme["gray-300"]};
      background: ${(props) => props.theme["gray-900"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    button[type="submit"] {
      padding: 0 1.25rem;
      margin-top: 1.5rem;
      height: 58px;

      border: 0;
      border-radius: 6px;
      font-weight: 700;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme["green-500"]};

      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme["gray-500"]};
  line-height: 0;
  cursor: pointer;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const TransactionType = styled.div`
  margin-top: 0.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  padding: 1rem;
  background: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-300"]};
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }
`;
