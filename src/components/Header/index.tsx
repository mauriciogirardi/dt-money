import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import logo from "../../assets/logo.svg";
import * as S from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.Content>
    </S.Container>
  );
}
