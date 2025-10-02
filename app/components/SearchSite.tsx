"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import allowedNames from "./allowedNames.json";

export default function SearchSite() {
  const [siteSearchTerm, setSiteSearchTerm] = useState("");

  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSiteSearchTerm("");
    if (allowedNames[0].names.includes(siteSearchTerm)) {
      router.push(`/${siteSearchTerm}/`);
    } else {
      router.push("/search/sorry-not-found");
    }
  }
  return (
    <form id="searchInput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Site"
        name="searchInput"
        value={siteSearchTerm}
        onChange={(e) => setSiteSearchTerm(e.target.value)}
        className=" block text-3xl  font-mono bg-amber-100 text-black placeholder:text-slate-700 
        rounded-2xl px-4 py-2"
      />
    </form>
  );
}
