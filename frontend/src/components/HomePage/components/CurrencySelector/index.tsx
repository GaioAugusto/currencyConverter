import React from "react";
import { CurrencySelectorView } from "./view";
import { CurrencySelectorProps, SelectedOption } from "./types";
import { SingleValue } from "react-select";
import { currencyOptions } from "../../../../types/currencyOptions";

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  placeholder,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const selectedOption =
    currencyOptions.find((option) => option.value === selectedCurrency) || null;

  const handleChange = (option: SingleValue<SelectedOption>) => {
    setSelectedCurrency(option?.value || "");
  };

  return (
    <CurrencySelectorView
      selectedOption={selectedOption}
      currencyOptions={currencyOptions}
      handleChange={handleChange}
      placeholder={placeholder}
    />
  );
};
