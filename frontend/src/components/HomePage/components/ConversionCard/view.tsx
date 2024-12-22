import { AmountCard } from "../AmountCard";
import { CurrencySelector } from "../CurrencySelector";
import { ConversionCardViewProps } from "./types";

type ComponentType = React.FC<ConversionCardViewProps>;
// export const ConversionCardView: ComponentType = ({
//   fromCurrency,
//   toCurrency,
//   ...props
// }) => {
//   const handleSwitchCurrencies = () => {
//     props.setFromCurrency(toCurrency);
//     props.setToCurrency(fromCurrency);
//   };

//   return (
//     <div className="border rounded-lg p-4 w-full bg-purple-50 shadow-md">
//       <div className="flex flex-row space-x-4">
//         <AmountCard amount={props.amount} setAmount={props.setAmount} />
//         <div className="flex flex-row items-center space-x-4">
//           <CurrencySelector
//             placeholder="From"
//             selectedCurrency={fromCurrency}
//             setSelectedCurrency={props.setFromCurrency}
//           />
//           <button
//             onClick={handleSwitchCurrencies}
//             className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all transform hover:scale-105 border-2 border-white flex items-center justify-center"
//             aria-label="Switch Currencies"
//           >
//             {/* Left-Right Swap Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M7 16l-4-4m0 0l4-4m-4 4h18m-2 4l4-4m0 0l-4-4"
//               />
//             </svg>
//           </button>

//           <CurrencySelector
//             placeholder="To"
//             selectedCurrency={toCurrency}
//             setSelectedCurrency={props.setToCurrency}
//           />
//         </div>
//       </div>
//       <div className="pt-5 text-gray-700">
//         {/* Amount Conversion */}
//         <p className="text-lg font-medium text-purple-700">{`${props.amount.toFixed(
//           2
//         )} ${fromCurrency} =`}</p>

//         {/* Result */}
//         <h1 className="text-3xl font-bold text-gray-900">
//           {`${props.result.toFixed(2)} ${toCurrency}`}
//         </h1>

//         {/* Exchange Rate */}
//         <p className="text-sm text-gray-800">
//           {`1 ${fromCurrency} = ${props.rate.toFixed(2)} ${toCurrency}`}
//         </p>
//       </div>
//     </div>
//   );
// };
export const ConversionCardView: React.FC<ConversionCardViewProps> = ({
  fromCurrency,
  toCurrency,
  ...props
}) => {
  const handleSwitchCurrencies = () => {
    props.setFromCurrency(toCurrency);
    props.setToCurrency(fromCurrency);
  };

  return (
    <div className="border rounded-lg p-4 w-full max-w-xl bg-purple-50 shadow-md">
      {/* On small screens: vertical stack; on sm+ screens: horizontal layout */}
      {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <AmountCard amount={props.amount} setAmount={props.setAmount} />

        <div className="flex flex-col sm:flex-row items-center gap-4"> */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
        <AmountCard amount={props.amount} setAmount={props.setAmount} />
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
          <CurrencySelector
            placeholder="From"
            selectedCurrency={fromCurrency}
            setSelectedCurrency={props.setFromCurrency}
          />
          <button
            onClick={handleSwitchCurrencies}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all transform hover:scale-105 border-2 border-white flex items-center justify-center"
            aria-label="Switch Currencies"
          >
            {/* Left-Right Swap Icon */}
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
          <CurrencySelector
            placeholder="To"
            selectedCurrency={toCurrency}
            setSelectedCurrency={props.setToCurrency}
          />
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
