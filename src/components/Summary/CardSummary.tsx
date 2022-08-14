import { IconProps } from "phosphor-react";
import CountUp from "react-countup";

import { defaultTheme } from "../../styles/theme/default";
import * as S from "./styles";

interface CardSummaryProps {
  title: string;
  amount: number;
  iconColor?: keyof typeof defaultTheme;
  variant?: keyof typeof defaultTheme;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function CardSummary({
  amount,
  title,
  iconColor = "white",
  icon: Icon,
  variant,
}: CardSummaryProps) {
  return (
    <S.SummaryCard variant={variant}>
      <header>
        <span>{title}</span>
        <Icon size={32} color={defaultTheme[iconColor]} />
      </header>
      <strong>
        <CountUp
          end={amount}
          prefix="R$  "
          separator="."
          decimal=","
          decimals={2}
        />
      </strong>
    </S.SummaryCard>
  );
}
