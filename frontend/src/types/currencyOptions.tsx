import Flag from "react-world-flags";
import { CurrencyOption } from "../components/HomePage/components/CurrencySelector/types";
import { currencyMap } from "./currencyMap";

export const currencyOptions: CurrencyOption[] = Object.entries(
  currencyMap
).map(([currencyCode, { countryCode, currencyName }]) => ({
  value: currencyCode,
  label: (
    <div className="flex items-center">
      <Flag
        code={countryCode}
        style={{ width: "24px", height: "16px", marginRight: "8px" }}
      />
      <span className="font-semibold">{currencyCode}</span>
      <span className="ml-2 text-gray-500">{currencyName}</span>
    </div>
  ),
}));
