import { InstructionsViewProps } from "./types";

type ComponentType = React.FC<InstructionsViewProps>;
export const InstructionsView: ComponentType = () => {
  return (
    <section
      id="instructions"
      className="min-h-screen pt-16 bg-gradient-to-b from-purple-100 to-purple-50 relative overflow-hidden"
    >
      {/* Floating Currency Symbols */}
      <div className="absolute top-10 left-10 text-purple-200 text-8xl opacity-20 animate-float">
        $
      </div>
      <div className="absolute top-1/3 right-1/4 text-purple-300 text-7xl opacity-20 animate-float-slow">
        €
      </div>
      <div className="absolute bottom-10 left-1/2 text-purple-400 text-9xl opacity-30 animate-float-fast">
        ¥
      </div>
      <div className="absolute top-1/2 right-10 text-purple-300 text-7xl opacity-20 animate-float-slow">
        £
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-purple-200 text-6xl opacity-25 animate-float-fast">
        ₿
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full space-y-10">
        <h1 className="text-5xl font-bold text-purple-900">How it works?</h1>

        <div className="space-y-6">
          <div className="flex flex-col items-start max-w-lg">
            <h2 className="text-3xl font-semibold text-purple-800">Step 1</h2>
            <p className="text-lg text-purple-700">
              Enter the amount you'd like to convert.
            </p>
          </div>
          <div className="flex flex-col items-start max-w-lg">
            <h2 className="text-3xl font-semibold text-purple-800">Step 2</h2>
            <p className="text-lg text-purple-700">
              Select the currencies you want to convert between.
            </p>
          </div>
          <div className="flex flex-col items-start max-w-lg">
            <h2 className="text-3xl font-semibold text-purple-800">Step 3</h2>
            <p className="text-lg text-purple-700">
              Get instant results with daily updated exchange rates.
            </p>
          </div>
        </div>

        {/* Explanation of Backend Functionality */}
        <div className="max-w-lg text-center">
          <p className="text-md text-purple-700 mt-6 leading-relaxed">
            Our system uses a custom-built API to ensure the most accurate and
            up-to-date currency conversions. The API fetches data from reliable
            external sources, processes it, and stores the information in our
            secure database. When you make a request, the backend retrieves the
            relevant exchange rates and delivers the results to the frontend in
            real time, ensuring seamless and reliable performance.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="#home"
          className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all text-center"
        >
          Start converting
        </a>
      </div>
    </section>
  );
};
