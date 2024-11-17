import { MenuItem, NavBarProps } from "./types";
import { NavBarView } from "./view";

type ComponentType = React.FC<NavBarProps>;
export const NavBar: ComponentType = () => {
  const menuItems: MenuItem[] = [
    { label: "Home", href: "#home" },
    { label: "How it works", href: "#instructions" },
  ];
  return <NavBarView menuItems={menuItems} />;
};
