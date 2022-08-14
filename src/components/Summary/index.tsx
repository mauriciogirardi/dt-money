import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import CountUp from "react-countup";
import { useSummary } from "../../hooks/useSummary";
import { CardSummary } from "./CardSummary";

import * as S from "./styles";

export function Summary() {
  const { summary } = useSummary();

  return (
    <S.Container>
      <CardSummary
        title="Entradas"
        amount={summary.income}
        icon={ArrowCircleUp}
        iconColor="green-300"
      />

      <CardSummary
        title="Saídas"
        amount={summary.outcome}
        icon={ArrowCircleDown}
        iconColor="red-300"
      />

      <CardSummary
        title="Total"
        amount={summary.total}
        icon={CurrencyDollar}
        variant="green-500"
      />
    </S.Container>
  );
}
