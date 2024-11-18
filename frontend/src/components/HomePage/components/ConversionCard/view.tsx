import { AmountCard } from "../AmountCard";
import { CurrencySelector } from "../CurrencySelector";
import { ConversionCardViewProps } from "./types";

type ComponentType = React.FC<ConversionCardViewProps>;
export const ConversionCardView: ComponentType = () => {
  return (
    <div className="border rounded-lg p-4 w-full bg-purple-50 shadow-md">
      <div className="flex flex-row  space-x-4">
        <AmountCard />
        <CurrencySelector placeholder="From" />
        <CurrencySelector placeholder="To" />
      </div>
      <div className="pt-5 text-gray-500 text-xl">
        <p>{`AMOUNT (NAME OF THE CURRENCY) = `}</p>
        <h1 className="text-gray-800 text-2xl">{`RESULT (PUT NAME OF THE CURRENCY HERE)`}</h1>
        <p>{`1 (Currency to) = X (NAME OF THE CURRENCY)`}</p>
      </div>
    </div>
  );
};
