import Link from "next/link";
import SectionTitle from "../components/SectionTitle";

export default function Blog() {
  return (
    <main className="container md:w-1/2">
      <section className="px-8 md:px-0">
        <SectionTitle>My Blog</SectionTitle>
        <p>silahkan baca aja kalau perlu</p>

        <Link
          href="/blog/2024/kenapa-react"
          className="hover:opacity-70"
        >
          <div className="flex gap-6 mt-10">
            <div>
              <h1 className="font-medium text-lg">Setup Project React.js</h1>
              <div className="flex items-center gap-4">
                <h2 className="text-sm opacity-60 flex items-center gap-1">
                  128 views
                </h2>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
