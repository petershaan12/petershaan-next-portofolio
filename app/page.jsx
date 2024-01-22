import React from "react";
import me from "../public/me1.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container md:px-10 lg:px-40 -mt-5">
        <section className="container px-8 md:px-0 -mb-40 lg:-mb-56  ">
          <div className="md:flex block">
            <div className="text-left w-full md:w-8/12 md:p-10 md:py-10 ">
              <h2 className="font-helvetica text-5xl py-2 text-black font-medium lg:text-6xl dark:text-white">
                Peter Shaan
              </h2>
              <h3 className="text-sm pt-4 md:text-lg lg:text-xl dark:text-white">
                <span className="bg-yellow-200  dark:bg-white text-black px-2">
                  Programmer and Frontend Dev
                </span>
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-lg lg:text-xl dark:text-white">
                21 years old from 🇮🇩,🖥️ Student of Informatic Technology, and
                also Content Creator and Video Editor
                <a
                  className="text-blue-500 flex font-semibold"
                  target="_blank"
                  href="mailto:contactpetershaan@gmail.com"
                >
                  Interested in working together ? Email me!
                </a>
              </p>
            </div>
            <div className="md:relative md:w-4/12">
                <Image src={me}  className="lg:-mt-16 md:-mt-0 -mt-6 -mb-12" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}