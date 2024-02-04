import Image from "next/image";
import React from "react";
import ProjectsItem from "../components/ProjectItem";
import SectionHeader from "../components/SectionHeader";
import SectionTitle from "../components/SectionTitle";
import ProjectExperience from "../components/ProjectExperience";

export default function Tools() {
  return (
    <>
      <main className="container md:w-1/2">
        <section className="px-8 md:px-0">
          <SectionTitle>Project & Experience</SectionTitle>
          <p>
            berikut adalah experience aku dibidang{" "}
            <span className=" underline font-medium text-black dark:text-white">
              Pekerjaan & Projek
            </span>
          </p>

          <SectionHeader title="Project" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProjectsItem
              src="/projects/news.unai.png"
              title="UNAI News"
              tags={["wordpress", "avada"]}
              year="2024"
              url="https://www.news.unai.edu"
            />
            <ProjectsItem
              src="/projects/unai.png"
              title="Universitas Advent Indonesia"
              tags={["wordpress", "avada"]}
              year="2023 - 2024"
              url="https://www.unai.edu"
            />
            <ProjectsItem
              src="/projects/online.unai.png"
              title="Fitur Evaluasi Diri online.unai.edu"
              tags={["php", "sql server"]}
              year="2023"
              url="https://online.unai.edu/mhs/login.php"
            />

            <ProjectsItem
              src="/projects/gapaTetris.png"
              title="GAPA Tetris"
              tags={["Java FX", "Scene Builder"]}
              year="2023"
              url="https://github.com/petershaan12/GAPA-Tetris?tab=readme-ov-file"
            />

            <ProjectsItem
              src="/projects/thewildoasis.png"
              title="The Wild Oasis"
              tags={["React JS", "Supabase", "Styled Component"]}
              year="2023"
              url="https://github.com/petershaan12/the-wild-oasis"
            />

            <ProjectsItem
              src="/projects/thefastreactpizza.png"
              title="The Fast React Pizza"
              tags={["React Router", "Tailwind CSS"]}
              year="2023"
              url="https://github.com/petershaan12/the-fast-react-pizza"
            />

            <ProjectsItem
              src="/projects/wonderfulIndonesia.png"
              title="Clonning Website Wonderful Indonesia"
              tags={["HTML", "Bootstrap 5"]}
              year="2023"
              url="https://github.com/petershaan12/Wonderful-Indonesia-Clone"
            />

            <ProjectsItem
              src="/projects/indodrives.png"
              title="Indo Drives Solution"
              tags={["wordpress", "c-panel"]}
              year="2019"
              url="http://www.indodrives.rf.gd"
            />
          </div>
          <SectionHeader title="Experience" />
          {/* <ProjectExperience
            period="August 2023 - Present"
            position="Programmer"
            organizationUrl="https://unai.edu"
            organizationName="Universitas Advent Indonesia"
            description="Create & Develop Website <a href='https://unai.edu' className='underline font-medium text-black dark:text-white'>unai.edu</a> (NEW 2023) <br /> Development & Database Administrator Module UNAI (Universitas Advent Indonesia)"
            skills={["php", "Bootstrap", "mysql"]}
          /> */}
          <div className="prose prose-zinc dark:prose-invert max-w-full w-full">
            <p>August 2023 - Present</p>
            <h1 className="text-3xl my-2">
              <span className="font-helvetica">Programmer at</span>
              <a
                href="https://unai.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline px-2"
              >
                "Universitas Advent Indonesia"
              </a>
            </h1>

            <p>
              Create & Develop Website{" "}
              <a
                href="https://unai.edu"
                className="underline font-medium text-black dark:text-white"
              >
                unai.edu
              </a>{" "}
               <span>& </span>
              <a
                href="https://news.unai.edu"
                className="underline font-medium text-black dark:text-white"
              >
               news.unai.edu
              </a>{" "}
              (NEW 2024) <br /> Development & Database Administrator Module UNAI
              (Universitas Advent Indonesia)
            </p>
            <Image
              src="/projects/unaiRevamp.png"
              width={900}
              height={500}
              className="rounded-lg"
            />
            
            <a>unai.edu</a>

            

            <h3 id="stack-used" data-svelte-h="svelte-ghvkof">Stack used</h3>
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
