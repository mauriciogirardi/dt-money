import { Calendar } from "phosphor-react";

import { SearchForm } from "./components/SearchForm";
import { Loading } from "../../components/Loading";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/Header";

import * as S from "./styles";
import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../../context/TransactionsContext";

export function Transactions() {
  const { isFetchingTransaction, transactions } = useContextSelector(
    TransactionContext,
    (ctx) => {
      return {
        isFetchingTransaction: ctx.isFetchingTransaction,
        transactions: ctx.transactions,
      };
    }
  );

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
                      {transaction.type === "outcome" && "- "}
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
