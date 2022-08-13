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
}

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isFetchingTransaction, setIsFetchingTransaction] = useState(false);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        setIsFetchingTransaction(true);

        const data = await ServiceTransactions.getAllTransactions<
          Transaction[]
        >();

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

    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        isFetchingTransaction,
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
