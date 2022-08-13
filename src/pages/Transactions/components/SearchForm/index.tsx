import { MagnifyingGlass } from "phosphor-react";
import * as S from "./styles";

export function SearchForm() {
  return (
    <S.Container>
      <input placeholder="Busque por transações" />
      <S.SearchButton type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </S.SearchButton>
    </S.Container>
  );
}
