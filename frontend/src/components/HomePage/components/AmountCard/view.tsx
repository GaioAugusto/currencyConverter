import { useState } from "react";
import { AmountCardViewProps } from "./types";

type ComponentType = React.FC<AmountCardViewProps>;
export const AmountCardView: ComponentType = (props) => {
  const [inputValue, setInputValue] = useState(`$${props.amount.toFixed(2)}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const numericPart = value.replace(/[^0-9.]/g, "");
    if (/^\d*\.?\d*$/.test(numericPart)) {
      setInputValue(`$${numericPart}`);

      const numericValue = parseFloat(numericPart) || 0;
      props.setAmount(numericValue);
    }
  };

  const handleBlur = () => {
    const numericPart = parseFloat(inputValue.replace(/[^0-9.]/g, "")) || 0;
    setInputValue(`$${numericPart.toFixed(2)}`);
    props.setAmount(numericPart);
  };

  return (
    <div className="border rounded-lg p-4 w-full sm:w-64 bg-purple-50 shadow-md">
      <div className="text-sm text-purple-700 mb-2">Amount</div>
      {/* Input Field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full text-2xl font-bold text-gray-900 bg-purple-50 border-0 focus:ring-2 focus:ring-purple-400 focus:outline-none"
        placeholder="Enter amount"
      />
    </div>
  );
};
