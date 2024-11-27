import { SingleValue } from "react-select";

export interface SelectedOption {
  value: string;
  label: JSX.Element;
}

export interface CurrencyOption {
  value: string;
  label: JSX.Element;
}

export interface CurrencySelectorProps {
  placeholder?: string;
  selectedCurrency: string;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
}

export interface CurrencySelectorViewProps {
  selectedOption: SelectedOption | null;
  currencyOptions: CurrencyOption[];
  placeholder?: string;

  handleChange: (option: SingleValue<CurrencyOption>) => void;
}
