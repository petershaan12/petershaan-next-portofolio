"use client"
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

export default function Tools() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

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
              <div class="border-b border-dashed w-[20px] border-gray-200 dark:border-slate-700"></div>
                <h1 class=" bg-neutral-200 dark:bg-slate-700 px-2 py-1 text-sm rounded-md">
                  Software Development
                </h1>
                <div class="border-b grow border-dashed border-gray-200 dark:border-slate-700"></div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <Image  src="/icon/vscode.png" 
                  width={50}
      height={50}/>
                  <p class="font-semibold">Visual Studio Code</p>{" "}
                  <p class="text-xs">Text Editor</p>{" "}
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <Image 
                  src={currentTheme === "dark" ? "/icon/git_dark.png" : "/icon/git.png"} 
                  width={50}
      height={50}/>
                  <p class="font-semibold">GitHub</p>{" "}
                  <p class="text-xs">Version Control System</p>{" "}
                </a>
                <a
                  href="https://developer.android.com/studio"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <Image  src="/icon/android.png" width={50}
      height={50}/>
                  <p class="font-semibold">Android Studio</p>{" "}
                  <p class="text-xs">Android Development</p>{" "}
                </a>
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <Image  src="/icon/figma.png" width={50}
      height={50}/>
                  <p class="font-semibold">Figma</p>{" "}
                  <p class="text-xs">UI/UX</p>{" "}
                </a>
                <a
                  href="https://www.microsoft.com/en-us/sql-server/"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                   <Image 
                  src={currentTheme === "dark" ? "/icon/sqlserver_dark.png" : "/icon/sqlserver.png"} 
                  width={50}
      height={50}/>
                  <p class="font-semibold">Sql Server Management Studio (SMSS)</p>{" "}
                  <p class="text-xs">Database</p>{" "}
                </a>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div class="mt-10 mb-5 flex flex-row items-center gap-4">
              <div class="border-b border-dashed w-[20px] border-gray-200 dark:border-slate-700"></div>
                <h1 class=" bg-neutral-200 dark:bg-slate-700 px-2 py-1 text-sm rounded-md">
                  Hardware
                </h1>
                <div class="border-b grow border-dashed border-gray-200 dark:border-slate-700"></div>
              </div>

              <div class="grid grid-cols-2 gap-2">
                <a
                  href="https://www.msi.com/Laptop/GF65-Thin-10UX/Specification"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <Image  src="/icon/msi.png" width={50}
      height={50}/>
                  <p class="font-semibold">MSI GF65 </p>{" "}
                  <p class="text-xs">Laptop</p>{" "}
                </a>
                <a
                  href="https://www.tokopedia.com/sakurabdg/mouse-gaming-msi-m99-orignal?utm_source=google&utm_medium=organic&utm_campaign=pdp-seo"
                  target="_blank"
                  class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
                >
                  <Image  src="/icon/mouse.png" width={50}
      height={50}/>
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
