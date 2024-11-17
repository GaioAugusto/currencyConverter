import React from "react";
import Select from "react-select";
import { CurrencySelectorViewProps } from "./types";

export const CurrencySelectorView: React.FC<CurrencySelectorViewProps> = ({
  selectedOption,
  currencyOptions,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="w-72">
      {/* Render the placeholder */}
      {placeholder && (
        <div className="text-sm text-gray-500 mb-2">{placeholder}</div>
      )}
      {/* Dropdown */}
      <Select
        value={selectedOption}
        options={currencyOptions}
        onChange={handleChange}
        styles={{
          control: (base) => ({
            ...base,
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "4px",
            boxShadow: "none",
            fontSize: "16px",
            fontWeight: "500",
          }),
        }}
      />
    </div>
  );
};
