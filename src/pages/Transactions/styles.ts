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
`;

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) =>
    variant === "income" ? theme["green-500"] : theme["red-300"]};
`;
