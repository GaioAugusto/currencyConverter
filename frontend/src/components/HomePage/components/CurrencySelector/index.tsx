import { useState } from "react";
import { CurrencySelectorProps, SelectedOption, CurrencyOption } from "./types";
import { CurrencySelectorView } from "./view";
import Flag from "react-world-flags";
import { SingleValue } from "react-select";

// Currency options
const currencyOptions: CurrencyOption[] = [
  {
    value: "EUR",
    label: (
      <div className="flex items-center">
        <Flag
          code="EU"
          style={{ width: "24px", height: "16px", marginRight: "8px" }}
        />
        <span className="font-semibold">EUR</span>
        <span className="ml-2 text-gray-500">Euro</span>
      </div>
    ),
  },
  {
    value: "USD",
    label: (
      <div className="flex items-center">
        <Flag
          code="US"
          style={{ width: "24px", height: "16px", marginRight: "8px" }}
        />
        <span className="font-semibold">USD</span>
        <span className="ml-2 text-gray-500">United States Dollar</span>
      </div>
    ),
  },
  {
    value: "BRL",
    label: (
      <div className="flex items-center">
        <Flag
          code="BR"
          style={{ width: "24px", height: "16px", marginRight: "8px" }}
        />
        <span className="font-semibold">BRL</span>
        <span className="ml-2 text-gray-500">Brazilian Real</span>
      </div>
    ),
  },
];

export const CurrencySelector: React.FC<CurrencySelectorProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<SelectedOption | null>(
    currencyOptions[0]
  );

  const handleChange = (option: SingleValue<CurrencyOption>) => {
    setSelectedOption(option as SelectedOption);
  };

  return (
    <CurrencySelectorView
      selectedOption={selectedOption}
      currencyOptions={currencyOptions}
      handleChange={handleChange}
      placeholder={props.placeholder}
    />
  );
};
