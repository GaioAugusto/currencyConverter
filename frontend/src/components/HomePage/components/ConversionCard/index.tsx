import { useCallback, useEffect, useState } from "react";
import { ConversionCardProps, Rate } from "./types";
import { ConversionCardView } from "./view";
import { getExchangeRates } from "../../../../api";

export const ConversionCard: React.FC<ConversionCardProps> = () => {
  const [rates, setRates] = useState<Rate[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [amount, setAmount] = useState(1.0);
  const [result, setResult] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [rate, setRate] = useState(0);

  // Fetch exchange rates and add EUR if missing
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const data = await getExchangeRates();
        let ratesData = data.data;

        ratesData = [...ratesData, { currency_code: "EUR", rate: 1.0 }];

        setRates(ratesData);

        if (ratesData.length >= 2) {
          setFromCurrency("USD");
          setToCurrency("EUR");
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchRates();
  }, []);

  const getResult = useCallback(() => {
    if (!fromCurrency || !toCurrency || rates.length === 0) {
      console.log("getResult: Missing data");
      return;
    }
  
    const fromRate = rates.find(
      (item) => item.currency_code === fromCurrency
    )?.rate;
    const toRate = rates.find(
      (item) => item.currency_code === toCurrency
    )?.rate;
  
    if (fromRate == null || toRate == null) {
      console.log("Invalid currency selected");
      return;
    }
  
    const calculatedRate = toRate / fromRate;
  
    setRate(calculatedRate);
    setResult(amount * calculatedRate);
  }, [fromCurrency, toCurrency, rates, amount]);

  useEffect(() => {
    if (fromCurrency && toCurrency && rates.length > 0) {
      getResult();
    }
  }, [fromCurrency, toCurrency, rates, amount, getResult]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ConversionCardView
      rates={rates}
      amount={amount}
      setAmount={setAmount}
      result={result}
      fromCurrency={fromCurrency}
      setFromCurrency={setFromCurrency}
      toCurrency={toCurrency}
      setToCurrency={setToCurrency}
      rate={rate}
    />
  );
};
