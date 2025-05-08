"use client";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
// import { useEffect, useState } from "react";
import { LikeButton } from "@lyket/react";

export default function Blog() {
  // const [likes, setLikes] = useState(0);

  // useEffect(() => {
  //   // Fetch likes count when component mounts
  //   getLike("kenapa-react", (likesCount) => {
  //     setLikes(likesCount);
  //   });
  // }, []);
  return (
    <main className="container md:w-1/2">
      <section className="px-8 md:px-0">
        <SectionTitle>My Blog</SectionTitle>
        <p className="dark:text-gray-400 pt-2">
          silahkan baca aja kalau perlu 🦕
        </p>

        <Link href="/blog/2024/kenapa-react" className="hover:opacity-70">
          <div className="flex gap-2 mt-10">
            <p className="text-4xl">❓</p>
            <div className="">
              <h1 className="font-medium text-lg">
                Kenapa Belajar React versi gue
              </h1>
              <LikeButton
                id="kenapa-belajar-react"
                namespace="post"
                hideCounterIfLessThan={1}
              >
                {({ totalLikes }) => (
                  <>
                    <div>{totalLikes} likes</div>
                  </>
                )}
              </LikeButton>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
