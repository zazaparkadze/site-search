import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

type Props = {
  params: {
    siteSearchTerm: string;
  };
};

export default async function Site({ params }: Props) {
  const { siteSearchTerm } = await params;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const str = fs.readFileSync(
    path.join(process.cwd(), "app/[siteSearchTerm]/", "example.html"),
    "utf8"
  );

  function firstFourLines(file: matter.GrayMatterFile<string>): void {
    file.excerpt = file.content.slice(0, 5);
  }

  const file = matter(str);
  firstFourLines(file);
  console.log(file);

  return (
    <div>
      <p>{__dirname}</p>
      <p>{__filename}</p>
      <p className="text-4xl"> Site of {siteSearchTerm}</p>
      <br />
      <p>{file.data.id}</p>
      <p>{file.data.title}</p>
      <p>{file.data.body}</p>
      <p>{file.excerpt?.toLocaleUpperCase()}</p>
      <p>{file.content}</p>
      <p>{file.orig.toLocaleString()}</p>
    </div>
  );
}
