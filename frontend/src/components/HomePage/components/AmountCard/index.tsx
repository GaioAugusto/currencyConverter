import { AmountCardProps } from "./types";
import { AmountCardView } from "./view";

type ComponentType = React.FC<AmountCardProps>;
export const AmountCard: ComponentType = (props) => {
  return (
    <AmountCardView
      amount={props.amount}
      setAmount={props.setAmount}
      // getResult={props.getResult}
    />
  );
};
