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
            backgroundColor: "#ffffff", // Dropdown background
            border: state.isFocused
              ? "1px solid #d4bff9" // Purple border on focus
              : "1px solid #e0e0e0", // Default border
            borderRadius: "8px",
            boxShadow: state.isFocused
              ? "0 0 0 2px rgba(212, 191, 249, 0.5)" // Purple shadow on focus
              : "none",
            padding: "4px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#4a4a4a",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              border: "1px solid #d4bff9", // Ensure hover matches focus
            },
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#ffffff", // Menu background
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused
              ? "#f3e8ff" // Light purple on hover
              : "#ffffff", // Default for others (including selected)
            color: state.isFocused
              ? "#4a4a4a" // Dark gray for hovered text
              : state.isSelected
              ? "#4a4a4a" // Keep selected text dark gray
              : "#6b46c1", // Default purple text for non-selected
            padding: "10px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f3e8ff", // Same hover color for options
            },
          }),
          singleValue: (base) => ({
            ...base,
            color: "#4a4a4a", // Selected value color
          }),
          placeholder: (base) => ({
            ...base,
            color: "#9b82cc", // Subtle purple placeholder
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            color: state.isFocused ? "#9b82cc" : "#d4bff9", // Dropdown arrow
            transition: "color 0.2s ease",
          }),
          indicatorSeparator: (base) => ({
            ...base,
            backgroundColor: "#d4bff9", // Purple separator
          }),
        }}
      />
    </div>
  );
};
