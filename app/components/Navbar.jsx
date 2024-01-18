"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeSwitcher from "../ThemeSwitcher";

const navLinks = [
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Tools",
    path: "tools",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="container px-10 md:px-20 lg:px-40 ">
      <nav className=" py-10 mb-12 flex justify-between">
        <Link href={"/"}>
          <h1 className="cursor-pointer font-helvetica text-xl text-gray-800 dark:text-white font-helvetica">
            Ps
          </h1>
        </Link>
        <ul className="flex items-center text-gray-800 dark:text-white">
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className=" hover:bg-slate-200 active:border-2 active:border-blue-400 md:px-2 md:py-2 cursor-pointer text-lg items-center  ml-4 flex"
            >
              <Bars3Icon className="h-5 w-5 mr-2 cursor-pointer" />
              Menu
            </button>
          </li>
        </ul>
      </nav>
      {navbarOpen && (
        <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
