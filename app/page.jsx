import React from "react";
import me from "../public/me1.png";
import Image from "next/image";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="container pt-8 lg:px-40">
        <section className="container -mb-40 xl:-mb-56 px-8 lg:px-0 ">
          <div className="md:flex block ">
            <div className="w-full md:w-8/12 xl:mt-20 md:px-10  ">
              <h2
                className={`text-5xl xl:text-6xl dark:text-white font-helvetica`}
              >
                Peter Shaan
              </h2>
              <h3 className="text-md xl:text-xl dark:text-black py-3 xl:py-5 ">
                <span className="bg-yellow-200 dark:bg-[#111215]  dark:text-gray-400 ">
                  Programmer and Frontend Dev
                </span>
              </h3>
              <p className="text-md text-black/80 font-jetbrains dark:text-gray-400 ">
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
              <Image
                priority={true}
                src={me}
                className="lg:-mt-16 md:-mt-10 -mt-6 -mb-12"
                alt="peter"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

