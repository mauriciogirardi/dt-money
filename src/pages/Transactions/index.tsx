import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import * as S from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <S.Container>
        <SearchForm />

        <S.TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.365,23
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/08/2022</td>
            </tr>

            <tr>
              <td width="50%">Supermercado</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 365,23
                </S.PriceHighlight>
              </td>
              <td>Compra</td>
              <td>12/08/2022</td>
            </tr>
          </tbody>
        </S.TransactionTable>
      </S.Container>
    </>
  );
}
