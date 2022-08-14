import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import * as S from "./styles";
import { useTransaction } from "../../context/TransactionsContext";

const newTransactionSchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.number(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionInputs = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {
  const { createTransaction } = useTransaction();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionInputs>({
    resolver: zodResolver(newTransactionSchema),
  });

  const handleCreateNewTransaction = async ({
    category,
    description,
    price,
    type,
  }: NewTransactionInputs) => {
    await createTransaction({ category, description, price, type });
    reset();
  };

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <S.TransactionType onValueChange={field.onChange}>
                <S.TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={22} />
                  Entrada
                </S.TransactionTypeButton>
                <S.TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={22} />
                  Saída
                </S.TransactionTypeButton>
              </S.TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
}
