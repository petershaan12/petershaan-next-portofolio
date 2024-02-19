"use client";

import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { TbMoonStars } from "react-icons/tb";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const isNightTime = () => {
    const currentHour = new Date().getHours();
    // console.log(currentHour);
    return currentHour >= 18 || currentHour < 6;
  };

  useEffect(() => {
    // Cek waktunya apakah pagi atau petang
    if (isNightTime()) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []); 

  const renderThemeChanger = () => {
    return theme === "dark" ? (
      <TbMoonStars className="w-4 text-white ml-4" onClick={() => setTheme("light")} />
    ) : (
      
      <SunIcon
      className="w-6 h-6 text-yellow-500"
      role="button"
      onClick={() => setTheme("dark")}
    />
    );
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
