import React from "react";

export default function Tools() {
  return (
    <>
      <main className="container md:w-1/2">
        <section className="container px-8 md:px-0">
          <h2 className="text-4xl font-bold font-helvetica">
            Tools yang aku gunakan sehari-hari
          </h2>
          <p>mulai dari hal development, design, maupun produktivitas</p>

          <div className="flex md:flex-nowrap flex-wrap">
            <div className=" md:w-1/2 mr-5">
              <div class="mt-10 mb-5 flex flex-row items-center gap-4">
                <h1 class=" bg-neutral-200 dark:bg-slate-700 px-2 py-1 text-sm">
                  Software Development
                </h1>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <p class="font-semibold">Visual Studio Code</p>{" "}
                  <p class="text-xs">Text Editor</p>{" "}
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <p class="font-semibold">GitHub</p>{" "}
                  <p class="text-xs">Version Control System</p>{" "}
                </a>
                <a
                  href="https://developer.android.com/studio"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <p class="font-semibold">Android Studio</p>{" "}
                  <p class="text-xs">Android Development</p>{" "}
                </a>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div class="mt-10 mb-5 flex flex-row items-center gap-4">
                <h1 class=" bg-neutral-200 dark:bg-slate-700 px-2 py-1 text-sm">
                  Hardware
                </h1>
              </div>

              <div class="grid grid-cols-2 gap-2">
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <p class="font-semibold">MSI GF65 </p>{" "}
                  <p class="text-xs">Laptop</p>{" "}
                </a>
                <a
                  href="https://git-scm.com/"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <p class="font-semibold">Mouse MSI M99</p>{" "}
                  <p class="text-xs">Mouse</p>{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
