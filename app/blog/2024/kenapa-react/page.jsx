"use client";
import SectionTitle from "@/app/components/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function KenapaReact() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const jumlahViews = localStorage.getItem("views");
    if (jumlahViews) setViews(parseInt(jumlahViews));
    else localStorage.setItem("views", "0");
    // Tambah 1 view setiap kali halaman dimuat
    setViews((prevViews) => prevViews + 1);
    // Simpan views baru di local storage
    localStorage.setItem("views", views.toString());
  }, []);

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
            <p>• {views} Views</p>
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
