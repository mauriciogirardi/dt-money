import { TransactionProvider } from "./TransactionsContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <TransactionProvider>{children}</TransactionProvider>;
}
