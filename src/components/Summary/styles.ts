import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/default";

interface SummaryCardProps {
  variant?: keyof typeof defaultTheme;
}

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${({ theme, variant }) => theme[variant || "gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
