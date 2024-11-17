import { SingleValue } from "react-select";

// Represents a single selected option in the dropdown
export interface SelectedOption {
  value: string;
  label: JSX.Element;
}

// Represents a single currency option in the dropdown
export interface CurrencyOption {
  value: string;
  label: JSX.Element;
}

// Props for the CurrencySelector component
export interface CurrencySelectorProps {
  placeholder?: string;
}

// Props for the CurrencySelectorView component
export interface CurrencySelectorViewProps {
  selectedOption: SelectedOption | null; // The currently selected option
  currencyOptions: CurrencyOption[]; // The list of available currency options
  placeholder?: string;

  handleChange: (option: SingleValue<CurrencyOption>) => void; // The function to handle option changes
}
