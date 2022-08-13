import { Money } from "phosphor-react";
import * as S from "./styles";

interface LoadingProps {
  text: string;
}

export function Loading({ text }: LoadingProps) {
  return (
    <S.Container>
      <S.Content>
        <Money size={32} />
        <S.Dynamic>
          <li>
            <span>{text}</span>
          </li>
        </S.Dynamic>
      </S.Content>
    </S.Container>
  );
}
