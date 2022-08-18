import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

import { ServiceTransactions } from "../apis/ServiceTransaction";
import { formattedCurrency } from "../utils/formattedCurrency";
import { formattedDate } from "../utils/formattedDate";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
  formattedPrice: string;
}

interface NewTransaction {
  description: string;
  category: string;
  price: number;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transaction[];
  isFetchingTransaction: boolean;
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: NewTransaction) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isFetchingTransaction, setIsFetchingTransaction] = useState(false);

  const parsedData = (data: Transaction[]): Transaction[] => {
    return data.map((transaction) => ({
      ...transaction,
      formattedPrice: formattedCurrency(transaction.price),
      createdAt: formattedDate(transaction.createdAt),
    }));
  };

  const fetchTransactions = useCallback(async (query?: string) => {
    try {
      setIsFetchingTransaction(true);
      let data: Transaction[] = [];

      if (query) {
        data = await ServiceTransactions.queryTransactions<Transaction[]>(
          query
        );
      } else {
        data = await ServiceTransactions.getAllTransactions<Transaction[]>();
      }

      setTransactions(parsedData(data));
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingTransaction(false);
    }
  }, []);

  const createTransaction = useCallback(
    async ({ category, description, price, type }: NewTransaction) => {
      try {
        const newTransaction =
          await ServiceTransactions.createTransactions<NewTransaction>({
            category,
            description,
            price,
            type,
          });

        setTransactions((prevState) =>
          parsedData([newTransaction, ...prevState])
        );
      } catch (err) {
        console.error(err);
      }
    },
    []
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionContext.Provider
      value={{
        isFetchingTransaction,
        fetchTransactions,
        createTransaction,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
