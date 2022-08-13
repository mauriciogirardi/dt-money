import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme["gray-800"]};

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
      width: 100%;
      border-radius: 6px;
      border: 0;
      padding: 1rem;
      background-color: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }

    button[type="submit"] {
      width: 100%;
      height: 58px;
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      margin-top: 1.5rem;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  top: 1.5rem;
  right: 1.5rem;
  outline: 0;
  color: ${({ theme }) => theme["gray-300"]};
  line-height: 0;
`;

export const TransactionType = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["gray-100"]};
  padding: 1rem;
  width: 100%;
  transition: background-color 0.2s;

  svg {
    color: ${({ theme, variant }) =>
      variant === "income" ? theme["green-700"] : theme["red-500"]};
  }

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "income" ? theme["green-700"] : theme["red-500"]};
    svg {
      color: ${({ theme }) => theme["gray-100"]};
    }
  }

  &.selected {
    background-color: ${({ theme, variant }) =>
      variant === "income" ? theme["green-700"] : theme["red-500"]};
    svg {
      color: ${({ theme }) => theme["gray-100"]};
    }
  }
`;
