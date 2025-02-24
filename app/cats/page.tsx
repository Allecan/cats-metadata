import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { METADATA_ICONS } from "@/utils/constants/metadata-icons";

import { findManyCats } from "../server-actions/find-many-cats";

export const metadata: Metadata = {
  title: "Cats",
  description: "Cats list page of popular cats",
  icons: METADATA_ICONS,
};

export default async function CatsPage() {
  const cats = await findManyCats();

  if (cats.status === "error") {
    return <div>{cats.error}</div>;
  }

  return (
    <main className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] sm:space-y-10 space-y-8">
      <section className="flex flex-col gap-8 items-center sm:items-start w-full">
        <h1 className="text-3xl">Welcome to cats page</h1>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
          >
            Go to Home
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/about"
          >
            Got to About page
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cats.data.map((cat) => (
          <Link
            prefetch
            key={cat.slug}
            className="rounded-xl border-[2px] border-white/25 p-4 grid grid-cols-[144px_1fr] gap-x-4 max-w-96 w-full overflow-x-scroll lg:overflow-x-hidden min-h-[180px] max-h-[180px] hover:border-white/70 transition-colors"
            href={`/cats/${cat.slug}`}
          >
            <Image
              className="object-cover aspect-square size-36 rounded-lg"
              src={cat.image}
              alt={cat.name}
              width={144}
              height={144}
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{cat.name}</h3>
              <p className="line-clamp-4 text-[#ededed]/70">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
