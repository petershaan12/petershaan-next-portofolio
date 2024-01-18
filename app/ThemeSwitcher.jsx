"use client";

import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { TbMoonStars } from "react-icons/tb";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-6 h-6 text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return <TbMoonStars onClick={() => setTheme("dark")} />;
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
