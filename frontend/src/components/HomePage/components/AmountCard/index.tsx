import { AmountCardProps } from "./types";
import { AmountCardView } from "./view";

type ComponentType = React.FC<AmountCardProps>;
export const AmountCard: ComponentType = () => {
  return <AmountCardView />;
};
