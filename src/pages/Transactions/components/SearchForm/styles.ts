import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  input {
    flex: 1;
    border-radius: 6px;
    background-color: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.938rem 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme["green-300"]};
  border: 1px solid ${({ theme }) => theme["green-300"]};
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme.white};
    border: 1px solid transparent;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme["gray-400"]};
    border: 1px solid ${({ theme }) => theme["gray-400"]};
  }
`;
