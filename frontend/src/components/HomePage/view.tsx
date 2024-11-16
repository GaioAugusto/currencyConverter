import { HomePageViewProps } from "./types";

type ComponentType = React.FC<HomePageViewProps>;
export const HomePageView: ComponentType = () => {
  return (
    <div>
      <h1>home page</h1>
    </div>
  );
};
