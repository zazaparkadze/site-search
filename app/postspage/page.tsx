import React from "react";
import getSortedPostsdata from "@/lib/getSortedPostsData";

export default function page() {
  const postsList = getSortedPostsdata();
  return <div>{JSON.stringify(postsList)}</div>;
}
