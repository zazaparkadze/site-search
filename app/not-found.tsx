import React from "react";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="m-10 p-10 text-4xl">
      <p>Page not Found</p>
      <div className="py-10">
        <Link href={"/"}> Back to Home Page</Link>
      </div>
    </div>
  );
}
