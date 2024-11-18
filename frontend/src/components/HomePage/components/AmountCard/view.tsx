import { AmountCardViewProps } from "./types";

type ComponentType = React.FC<AmountCardViewProps>;
export const AmountCardView: ComponentType = () => {
  return (
    <div className="border rounded-lg p-4 w-64 bg-purple-50 shadow-md">
      {/* Placeholder Text */}
      <div className="text-sm text-purple-700 mb-2">Amount</div>
      {/* Value */}
      <div className="text-2xl font-bold text-gray-900">R$1.00</div>
    </div>
  );
};
