import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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

interface TransactionContextType {
  transactions: Transaction[];
  isFetchingTransaction: boolean;
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isFetchingTransaction, setIsFetchingTransaction] = useState(false);

  async function fetchTransactions(query?: string) {
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

      const parsedData = data.map((transaction) => ({
        ...transaction,
        formattedPrice: formattedCurrency(transaction.price),
        createdAt: formattedDate(transaction.createdAt),
      }));

      setTransactions(parsedData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingTransaction(false);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        isFetchingTransaction,
        fetchTransactions,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  return context;
};
