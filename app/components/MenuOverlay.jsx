"use client";
import React, { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  let overlayRef = useRef();

  useEffect(() => {
    setMenuOpen(true);

    const handleBackgroundClick = (e) => {
      if (!overlayRef.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleBackgroundClick);
    return () => {
      document.removeEventListener("mousedown", handleBackgroundClick);
    };
  }, [onClose]);

  const handleClose = () => {
    setMenuOpen(false);
    onClose && onClose();
  };

  const overlayStyle = {
    transition: "transform 0.5s ease",
    transform: menuOpen ? "translateX(0)" : "translateX(250px)",
    zIndex: 50,
    position: "fixed",
    right: 0,
    top: 0,
    height: "100%",
    width: "250px",
  };

  const overlayBackgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Mengubah opasitas menjadi 70%
    zIndex: 40,
  };

  return (
    <>
      <div style={overlayBackgroundStyle} onClick={handleClose}></div>
      <div style={overlayStyle} ref={overlayRef}>
        <div className="w-64 bg-white h-full overflow-y-auto dark:bg-[#111215]">
          <div className="flex justify-end p-4">
            <XMarkIcon
              className="w-9 cursor-pointer active:border-4 active:border-blue-300 "
              onClick={handleClose}
            />
          </div>
          <h1 className="px-8 text-black dark:text-white font-bold text-3xl">
            Menu
          </h1>
          <ul className="flex flex-col py-5 px-8 text-black dark:text-gray-500">
            {links.map((link, index) => (
              <li key={index} onClick={handleClose} className="text-xs">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuOverlay;
