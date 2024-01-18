import React from "react";
import me from "../public/me.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container md:px-10 lg:px-40">
        <section className="container px-8 md:px-0 mb-28">
          <div className="md:flex block">
            <div className="text-left w-1/2 md:p-10 md:py-10 md:w-3/5 ">
              <h2 className="font-helvetica text-5xl py-2 text-black font-medium md:text-6xl dark:text-white">
                Peter Shaan
              </h2>
              <h3 className="text-sm pt-4 md:text-xl dark:text-white">
                <span className="bg-yellow-200  dark:bg-white text-black">
                  Programmer and Frontend Dev
                </span>
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white">
                21 years old from 🇮🇩,🖥️ Student of Informatic Technology, and
                also Content Creator and Video Editor
                <a className="text-blue-500 flex font-semibold" href="">
                  Interested in working together ? Email me!
                </a>
              </p>
            </div>
            <div className="md:relative md:w-96 ">
              <div className="w-96 h-96 absolute left-48 top-36  bg-yellow-300 rounded-full  md:top-0 md:left-0" />
              <div
                className="absolute md:left-0 md:top-0 left-40 top-36 w-full h-full -mt-10 "
                style={{ marginTop: "-80px" }}
              >
                <Image src={me} className="rounded-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
