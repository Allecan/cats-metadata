import { CATS } from "@/utils/constants/cats";
import { COUNTRY_CODE_NAME } from "@/utils/constants/country-names";
import { COUNTRY_CODE, SITE_NAME } from "@/utils/env";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const cat = CATS.find((cat) => cat.slug === slug);

  if (!cat) {
    return {
      title: "Cat not found",
    };
  }

  return {
    title: cat.name,
    description: cat.description,
    icons: "/vercel.svg",
    openGraph: {
      title: cat.name,
      description: cat.description,
      images: cat.image,
      type: "website",
      siteName: `${SITE_NAME} ${COUNTRY_CODE_NAME[COUNTRY_CODE]}`,
    },
    twitter: {
      card: "summary_large_image",
      title: cat.name,
      description: cat.description,
      images: cat.image,
    },
  };
}

export default async function CatPage({ params }: Props) {
  const { slug } = await params;

  const cat = CATS.find((cat) => cat.slug === slug);

  if (!cat) {
    return notFound();
  }

  return (
    <main className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] sm:space-y-10 space-y-8">
      <div className="grid grid-cols-[160px_1fr] gap-x-4 ">
        <Image
          priority
          className="object-cover aspect-square size-40 rounded-lg"
          src={cat.image}
          alt={cat.name}
          width={160}
          height={160}
        />
        <div className="space-y-8">
          <section className="flex flex-col gap-4 items-center sm:items-start w-full">
            <h1 className="text-3xl">Welcome to {cat.name} page</h1>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/"
              >
                Go to Home
              </Link>
              <Link
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="/cats"
              >
                Got to Cats page
              </Link>
            </div>
          </section>
          <section className="space-y-1">
            <h2 className="font-medium text-xl">Description</h2>
            <p className="text-[#ededed]/70">{cat.description}</p>
          </section>
          <section className="space-y-1">
            <h2 className="font-medium text-xl">Characteristics</h2>
            <ul className="list-disc pl-5">
              <li className="text-[#ededed]/70">
                {cat.characteristics.lifeExpectancy}
              </li>
              <li className="text-[#ededed]/70">{cat.characteristics.size}</li>
              <li className="text-[#ededed]/70">
                {cat.characteristics.temperament}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
