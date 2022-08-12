import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const Content = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme["green-700"]};
  }
`;
