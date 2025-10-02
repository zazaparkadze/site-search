import React from "react";
import { fileURLToPath, URLSearchParams } from "url";
import path from "path";

export default async function AboutPage() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    prop: "pageimages|extracts|info|coordinates",
    meta: "userinfo",
    format: "json",
    origin: "*",
    gsrsearch: "Newton",
    exchar: "100",
    exlimit: "max",
    explaintext: "true",
    exintro: "true",
  });

  const res = await fetch("https://en.wikipedia.org/w/api.php?" + searchParams);
  const data = await res.json();
  const pages: WikiResult[] = Object.values(data.query.pages);

  return (
    <div>
      AboutPage
      <h4>{__dirname}</h4>
      <h4>{__filename}</h4>
      <h4>{path.basename(__filename)}</h4>
      <h4>{path.extname(__filename)}</h4>
      {pages.map((page) => (
        <ul key={page.pageid}>
          <li>{page.pageid}</li>
          <li>{page.title}</li>
          <li>
            <img
              src={page.thumbnail ? page.thumbnail.source : undefined}
              alt={page.pageimage}
            />
          </li>
          <li>{page.extract}</li>
        </ul>
      ))}
    </div>
  );
}
