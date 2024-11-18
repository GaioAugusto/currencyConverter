import { AmountCard } from "./components/AmountCard";
import { ConversionCard } from "./components/ConversionCard";
import { CurrencySelector } from "./components/CurrencySelector";
import { HomePageViewProps } from "./types";

type ComponentType = React.FC<HomePageViewProps>;
export const HomePageView: ComponentType = () => {
  return (
    <section
      id="home"
      className="h-screen pt-16 bg-gradient-to-b from-purple-50 to-purple-100 relative overflow-hidden"
    >
      {/* Floating Currency Symbols */}
      <div className="absolute top-10 left-20 text-purple-300 text-8xl animate-float opacity-30">
        $
      </div>
      <div className="absolute top-1/4 left-1/2 text-purple-400 text-7xl animate-float-slow opacity-20">
        €
      </div>
      <div className="absolute top-2/3 left-1/4 text-purple-500 text-9xl animate-float-fast opacity-20">
        ¥
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center pt-10 h-full">
        <h1 className="text-5xl font-bold text-purple-900 mb-6">
          Currency Converter
        </h1>
        <p className="text-lg text-purple-700">
          Convert currencies with real-time exchange rates.
        </p>
        <div className="pt-10">
          <ConversionCard />
        </div>
      </div>
    </section>
  );
};
