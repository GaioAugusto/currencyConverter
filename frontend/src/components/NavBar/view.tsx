import { useState, useEffect } from "react";
import { NavBarViewProps } from "./types";

type ComponentType = React.FC<NavBarViewProps>;
export const NavBarView: ComponentType = ({ menuItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change color after scrolling 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 font-sans transition-colors duration-500 ease-out ${
        isScrolled ? "bg-purple-300 shadow-md opacity-95" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Title */}
        <a
          href="#home"
          className="text-2xl font-extrabold text-purple-900 hover:text-purple-500 transition-colors"
        >
          Currency Converter $
        </a>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-purple-900 hover:text-purple-500 transition-colors"
              >
                {item.label}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
