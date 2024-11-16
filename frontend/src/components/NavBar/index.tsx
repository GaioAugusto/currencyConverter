import { NavBarProps } from "./types";
import { NavBarView } from "./view";

type ComponentType = React.FC<NavBarProps>;
export const NavBar: ComponentType = () => {
  return <NavBarView />;
};
