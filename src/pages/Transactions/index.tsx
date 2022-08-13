import { Calendar } from "phosphor-react";

import { useTransaction } from "../../context/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { Loading } from "../../components/Loading";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/Header";

import * as S from "./styles";

export function Transactions() {
  const { transactions, isFetchingTransaction } = useTransaction();

  return (
    <>
      <Header />
      <Summary />

      <S.Container>
        <SearchForm />

        {isFetchingTransaction ? (
          <Loading text="Carregando transações..." />
        ) : (
          <S.TransactionTable>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.formattedPrice}
                    </S.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    <S.DateTable>
                      <Calendar size={22} />
                      {transaction.createdAt}
                    </S.DateTable>
                  </td>
                </tr>
              ))}
            </tbody>
          </S.TransactionTable>
        )}
      </S.Container>
    </>
  );
}
