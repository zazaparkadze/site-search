import Image from "next/image";
import Link from "next/link";
import SearchSite from "./components/SearchSite";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={300}
          height={61}
          priority
        />
        <SearchSite />
        <h1 className="text-3xl">
          <Link href={"/about"}>About</Link>
        </h1>
        <h1 className="text-3xl">
          <Link href={"/postspage"}>Posts</Link>
        </h1>
      </main>
    </div>
  );
}
