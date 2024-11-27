export interface Rate {
  currency_code: string;
  last_updated: string;
  rate: number;
}

export interface ConversionCardProps {}
export interface ConversionCardViewProps {
  rates: Rate[];
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  result: number;
  fromCurrency: string;
  setFromCurrency: React.Dispatch<React.SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: React.Dispatch<React.SetStateAction<string>>;
  rate: number;
}
