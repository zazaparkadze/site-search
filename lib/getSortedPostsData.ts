import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getSortedPostsdata() {
  const postsDirectory = path.join(process.cwd(), "blogposts");
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const id = fileName.replace(/\.md$/, "");

    const matterResult = matter(fileContent);

    const blogPost: BlogPost = {
      id: id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      body: matterResult.content,
    };
    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date > b.date ? 1 : -1));
}
