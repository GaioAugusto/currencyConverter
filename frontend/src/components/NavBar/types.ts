export interface MenuItem {
  label: string;
  href: string;
}

export interface NavBarProps {}
export interface NavBarViewProps {
  menuItems: MenuItem[];
}
