import React from "react";
import getSortedPostsdata from "@/lib/getSortedPostsData";

export default function page() {
  const postsList = getSortedPostsdata();

  return postsList.map((post) => {
    return (
      <div key={post.id}>
        <p>{post.date}</p>
        <p>{post.title}</p>
        <br />
        <p>{post.body}</p>
        <br />
        <br />
      </div>
    );
  });
}
