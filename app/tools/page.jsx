"use client";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import SectionHeader from "../components/SectionHeader";
import ToolsItem from "../components/ToolsItem";
import SectionTitle from "../components/SectionTitle";

export default function Tools() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <main className="container md:w-1/2">
        <section className="px-8 md:px-0">
          <SectionTitle>Tools yang aku gunakan sehari-hari</SectionTitle>
          <p>mulai dari hal development, design, maupun produktivitas</p>

          <div className="flex md:flex-nowrap flex-wrap">
            <div className=" md:w-1/2 mr-5">
              <SectionHeader title="Software Development" />

              <div class="grid grid-cols-2 gap-2">
                <ToolsItem
                  url="https://code.visualstudio.com/"
                  lightImageSrc="/icon/vscode.png"
                  currentTheme={currentTheme}
                  toolName="Visual Studio Code"
                  description="Text Editor"
                />

                <ToolsItem
                  url="https://github.com"
                  darkImageSrc="/icon/git_dark.png"
                  lightImageSrc="/icon/git.png"
                  currentTheme={currentTheme}
                  toolName="GitHub"
                  description="Version Control System"
                />

                <ToolsItem
                  url="https://developer.android.com/studio"
                  lightImageSrc="/icon/android.png"
                  toolName="Android Studio"
                  description="Android Development"
                />

                <ToolsItem
                  url="https://www.figma.com/"
                  lightImageSrc="/icon/figma.png"
                  toolName="Figma"
                  description="UI/UX"
                />

                <ToolsItem
                  url="https://www.microsoft.com/en-us/sql-server/"
                  lightImageSrc="/icon/sqlserver.png"
                  darkImageSrc="/icon/sqlserver_dark.png"
                  currentTheme={currentTheme}
                  toolName="Sql Server Management Studio (SMSS)"
                  description="Database"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <SectionHeader title="Hardware" />

              <div class="grid grid-cols-2 gap-2">
                <ToolsItem
                  url="https://www.msi.com/Laptop/GF65-Thin-10UX/Specification"
                  lightImageSrc="/icon/msi.png"
                  toolName="MSI GF65"
                  description="Laptop"
                />

                <ToolsItem
                  url="https://www.tokopedia.com/sakurabdg/mouse-gaming-msi-m99-orignal?utm_source=google&utm_medium=organic&utm_campaign=pdp-seo"
                  lightImageSrc="/icon/mouse.png"
                  toolName="Mouse MSI M99"
                  description="Mouse"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
