import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import * as S from "./styles";
import { useTransaction } from "../../../../context/TransactionsContext";

const searchFormScheme = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormScheme>;

export function SearchForm() {
  const { fetchTransactions } = useTransaction();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormScheme),
  });

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query);
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        placeholder="Busque por transações"
        {...register("query")}
        autoComplete="off"
      />
      <S.SearchButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </S.SearchButton>
    </S.Container>
  );
}
