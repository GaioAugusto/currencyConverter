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
    <div className="border rounded-lg p-4 w-64 bg-purple-50 shadow-md">
      {/* Render the placeholder */}
      {placeholder && (
        <div className="text-sm text-purple-700 mb-2">{placeholder}</div>
      )}
      {/* Dropdown */}
      <Select
        value={selectedOption}
        options={currencyOptions}
        onChange={handleChange}
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "#ffffff",
            border: state.isFocused ? "1px solid #d4bff9" : "1px solid #e0e0e0",
            borderRadius: "8px",
            boxShadow: state.isFocused
              ? "0 0 0 2px rgba(212, 191, 249, 0.5)"
              : "none",
            padding: "4px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#4a4a4a",
            "&:hover": {
              border: "1px solid #d4bff9",
            },
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#f3e8ff" : "#ffffff",
            color: state.isFocused ? "#4a4a4a" : "#6b46c1",
            padding: "10px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f3e8ff",
            },
          }),
          singleValue: (base) => ({
            ...base,
            color: "#4a4a4a",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#9b82cc",
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            color: state.isFocused ? "#9b82cc" : "#d4bff9",
          }),
          indicatorSeparator: (base) => ({
            ...base,
            backgroundColor: "#d4bff9",
          }),
        }}
      />
    </div>
  );
};
