import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.Content>
    </S.Container>
  );
}
