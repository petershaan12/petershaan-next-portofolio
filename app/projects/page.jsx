import Image from "next/image";
import React from "react";

export default function Tools() {
  return (
    <>
      <main className="container md:w-1/2 -mt-8">
        <section className="container px-8 md:px-0">
          <h2 className="text-4xl font-bold font-helvetica">Project Aku</h2>
          <p>
            berikut adalah experience aku dibidang{" "}
            <span className="bg-yellow-200  dark:bg-white text-black">
              Pekerjaan & Projek
            </span>
          </p>

          <div className="mt-10 mb-5 flex flex-row items-center gap-4">
            <h1 className=" bg-neutral-200 dark:bg-slate-700 px-2 py-1 text-sm">
              Project
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a href="https://www.unai.edu" target="_blank">
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/unai.png"
                  width={500}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">
                  Universitas Advent Indonesia
                </h6>
                <p className="font-regular text-xs">
                  [2023 - 2024] menggunakan full wordpress
                </p>
              </div>
            </a>
            <a href="https://www.online.unai.edu" target="_blank">
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/online.unai.png"
                  width={500}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">
                  Fitur Evaluasi Diri online.unai.edu
                </h6>
                <p className="font-regular text-xs">
                  [2023] menggunakan php dan sql server
                </p>
              </div>
            </a>
            <a
              href="https://github.com/petershaan12/GAPA-Tetris?tab=readme-ov-file"
              target="_blank"
            >
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/gapaTetris.png"
                  width={500}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">GAPA Tetris</h6>
                <p className="font-regular text-xs">
                  [2023] menggunakan JavaFX & Scene Builder
                </p>
              </div>
            </a>
            <a
              href="https://the-wild-oasis-green-six.vercel.app/dashboard"
              target="_blank"
            >
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/thewildoasis.png"
                  width={500}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">The Wild Oasis</h6>
                <p className="font-regular text-xs">
                  [2023] menggunakan React Js + Styled Components dengan
                  Supabase
                </p>
              </div>
            </a>
            <a
              href="https://the-wild-oasis-green-six.vercel.app/dashboard"
              target="_blank"
            >
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/thefastreactpizza.png"
                  width={500}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">The Fast React Pizza</h6>
                <p className="font-regular text-xs">
                  [2023] menggunakan React Js dengan Tailwind
                </p>
              </div>
            </a>
            <a
              href="https://petershaan12.github.io/Wonderful-Indonesia-Clone/"
              target="_blank"
            >
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/wonderfulIndonesia.png"
                  width={500}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">
                  Clonning Website Wonderful Indonesia
                </h6>
                <p className="font-regular text-xs">
                  [2023] menggunakan HTML, CSS(Bootstrap), Javascript
                </p>
              </div>
            </a>
            <a href="http://www.indodrives.rf.gd" target="_blank">
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/indodrives.png"
                  width={300}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">Indo Drives Solution</h6>
                <p className="font-regular text-xs">
                  [2019] menggunakan full wordpress
                </p>
              </div>
            </a>
          </div>
          <div className="mt-10 mb-5 flex flex-row items-center gap-4">
            <h1 className=" bg-neutral-200 dark:bg-slate-700 px-2 py-1 text-sm">
              Experience
            </h1>
          </div>
          <div class="prose prose-zinc dark:prose-invert max-w-full w-full">
            <p>August 2023 - Present</p>
            <h1 className="text-3xl  my-2">
              <span className="font-helvetica">Programmer at</span>
              <a
                href="https://unai.edu"
                target="_blank"
                className="underline px-2 "
              >
                Universitas Advent Indonesia
              </a>
            </h1>

            <p>
              Create & Develop Website{" "}
              <span className="underline">unai.edu (NEW 2023)</span> <br />
              Development & Database Administrator Module UNAI (Universitas
              Advent Indonesia)
            </p>
            <ul>
              <li>php</li>
              <li>Bootstrap</li>
              <li>mysql</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
