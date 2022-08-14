import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import * as S from "./styles";

const searchFormScheme = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormScheme>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormScheme),
  });

  const handleSearchTransactions = (data: SearchFormInputs) => {
    console.log(data);
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        placeholder="Busque por transações"
        {...register("query")}
        required
      />
      <S.SearchButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </S.SearchButton>
    </S.Container>
  );
}
