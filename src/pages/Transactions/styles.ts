import styled from "styled-components";

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0 auto;
  padding: 0 1rem;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  td {
    background-color: ${({ theme }) => theme["gray-600"]};
    padding: 1.25rem 2rem;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (max-width: 600px) {
    tr {
      background-color: ${({ theme }) => theme["gray-600"]};
    }

    td {
      padding: 0.6rem 2rem;
      display: block;
      width: 100%;

      &:first-child {
        padding-top: 1.5rem;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom-left-radius: 0;
      }

      &:last-child {
        padding-bottom: 1.5rem;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border-top-right-radius: 0;
      }
    }
  }
`;

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) =>
    variant === "income" ? theme["green-500"] : theme["red-300"]};
`;

export const DateTable = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
