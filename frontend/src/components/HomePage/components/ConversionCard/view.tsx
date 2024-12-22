import { AmountCard } from "../AmountCard";
import { CurrencySelector } from "../CurrencySelector";
import { ConversionCardViewProps } from "./types";

type ComponentType = React.FC<ConversionCardViewProps>;

export const ConversionCardView: ComponentType = ({
  fromCurrency,
  toCurrency,
  ...props
}) => {
  const handleSwitchCurrencies = () => {
    props.setFromCurrency(toCurrency);
    props.setToCurrency(fromCurrency);
  };

  return (
    <div className="border rounded-lg p-6 w-full max-w-3xl bg-purple-50 shadow-md mx-auto">
      {/* Main layout: Wrapping with consistent gap */}
      <div className="flex flex-wrap items-center justify-between gap-6">
        {/* Amount Card */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <AmountCard amount={props.amount} setAmount={props.setAmount} />
        </div>

        {/* Currency Selectors + Switch Button */}
        <div className="flex flex-wrap items-center gap-4 flex-grow">
          {/* "From" Selector */}
          <div className="w-full sm:w-auto flex-shrink-0">
            <CurrencySelector
              placeholder="From"
              selectedCurrency={fromCurrency}
              setSelectedCurrency={props.setFromCurrency}
            />
          </div>

          {/* Switch Button */}
          <button
            onClick={handleSwitchCurrencies}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all transform hover:scale-105 flex items-center justify-center"
            aria-label="Switch Currencies"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18m-2 4l4-4m0 0l-4-4"
              />
            </svg>
          </button>

          {/* "To" Selector */}
          <div className="w-full sm:w-auto flex-shrink-0">
            <CurrencySelector
              placeholder="To"
              selectedCurrency={toCurrency}
              setSelectedCurrency={props.setToCurrency}
            />
          </div>
        </div>
      </div>

      {/* Conversion Results */}
      <div className="pt-5 text-gray-700">
        <p className="text-lg font-medium text-purple-700">
          {`${props.amount.toFixed(2)} ${fromCurrency} =`}
        </p>
        <h1 className="text-3xl font-bold text-gray-900">
          {`${props.result.toFixed(2)} ${toCurrency}`}
        </h1>
        <p className="text-sm text-gray-800">
          {`1 ${fromCurrency} = ${props.rate.toFixed(2)} ${toCurrency}`}
        </p>
      </div>
    </div>
  );
};
