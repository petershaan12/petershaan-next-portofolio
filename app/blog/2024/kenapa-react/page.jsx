"use client";
import { TbHeart as HeartIcon } from "react-icons/tb";
import { TbHeartFilled as HeartFilledIcon } from "react-icons/tb";
import SectionTitle from "@/app/components/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getLike, postLike } from "@/app/api/like";

export default function KenapaReact() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Fetch initial likes when component mounts
    getLike("kenapa-react", (likesCount) => {
      setLikes(likesCount);
      setLiked(likesCount > 0);
    });
  }, []);

  const handleLikeClick = () => {
    if (!liked) {
      // If post is not liked, like it
      postLike("kenapa-react", () => {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);
      });
    } else {
      // If post is already liked, unlike it
      // (You may implement unlike functionality in your like.js if needed)
      // For now, let's just decrement the likes count locally
      setLikes((prevLikes) => prevLikes - 1);
      setLiked(false);
    }
  };

  return (
    <main className="container md:w-1/2  ">
      <section className="px-8 md:px-0">
        <Link href="/blog" className="hover:underline ">
          ← Back
        </Link>

        <article>
          <p className="text-6xl mt-5 text-left -ml-5 mb-6">❓</p>
          <SectionTitle>Kenapa Belajar React menurut gue</SectionTitle>
          <div className="flex flex-row  gap-x-5 mt-3">
            <p>• 14 Februari 2023 </p>
            <button
              onClick={handleLikeClick}
              className={`flex items-center ${
                liked ? "text-red-500" : "text-gray-500"
              }`}
            >
              {liked ? (
                <HeartFilledIcon className="w-6 h-6" />
              ) : (
                <HeartIcon className="w-6 h-6" />
              )}
              <span className="ml-2 text-black dark:text-white">
                {likes} Likes
              </span>
            </button>
          </div>
          <div className="prose prose-lg w-full text-pretty prose-a:no-underline prose-zinc dark:prose-invert mt-14">
            <p className="text-justify">
              Sebenarnya gaada alasan untuk tidak belajar{" "}
              <a href="https://react.dev/">react</a> buat kamu yang suka dalam
              bidang programming. itu *WAJIB* - kata gue mah, React itu sendiri
              adalah library yang dibuat dengan bahasa{" "}
              <a href="https://www.javascript.com/">javascript</a> bisa diilang
              itu op banget apalagi kalau sudah tau javascript seperti apa❗
              Dengan kamu belajar react saja kamu udh bisa buat building website
              frontend, backend, atau bahkan sampai mobile application. kurang
              apa lagi coba 😓. selain itu...
            </p>
            <ul>
              <li>
                Komunitasnya Luas banget (*krn yang buat facebook){" "}
                <a href="https://github.com/facebook/react" rel="nofollow">
                  https://github.com/facebook/react
                </a>
              </li>
              <li>
                React mudah dipelajari &amp; dipahami (*yang penting lu paham
                javascript )
              </li>
              <li>💵 Gajinya tinggi cuy</li>
              <li>Trending di Jaman skrng</li>
              <li>
                Librarynya banyak sepeprti Redux, React Router, Axios, Styled
                Component, dll
              </li>
            </ul>
            <h3>Harus apa dulu ?</h3>
            <p>
              tapi tidak semudah itu ferguso... ada hal yang mestinya lu paham
              dulu sebelumnya yaitu HTML, CSS, javascript karena mostly itu yang
              penting sebagai dasar lu sebelum memulai pemograman baik dalam
              website atau aplikasi.
            </p>
            <p>kalau udh paham mah gaskeunn...</p>
            <h3>Belajar dimana bang?</h3>
            <Image
              width={800}
              height={900}
              src="/blog/udemy_peter.jpg"
              sizes="100vw"
            />
            <p>
              sebenarnya mah youtube itu sok aja bisa jago tapi kalau gue dulu
              karena ingin gelar sertifikat (*anjay sertifikat) gue ambil dih{" "}
              <a href="">udemy.com</a>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
