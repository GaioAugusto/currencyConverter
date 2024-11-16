import { HomePageProps } from "./types";
import { HomePageView } from "./view";

type ComponentType = React.FC<HomePageProps>;
export const HomePage: ComponentType = () => {
  return <HomePageView />;
};
