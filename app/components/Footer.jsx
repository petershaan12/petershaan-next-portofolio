import React from "react";
import { AiFillLinkedin, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center py-10 pt-32 text-center w-full ">
      <hr class="h-px my-3 bg-gray-200 border-0 w-full  dark:bg-gray-700" />
      <div className="text-2xl flex justify-center gap-10 py-7 text-gray-400 dark:text-white">
        <a href="https://www.youtube.com/@petershaan_" target={"_blank"}>
          <AiFillYoutube className="mouse-clicked" />
        </a>
        <a href="https://www.instagram.com/petershaan_" target={"_blank"}>
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/peter-shaan-b59a111a6/"
          target={"_blank"}
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/petershaan12" target={"_blank"}>
          <BsGithub />
        </a>
      </div>
      <div className=" text-gray-500 dark:text-white">
        ©2024 Peter Shaan, All Rights Reserved
      </div>
    </footer>
  );
}
