import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "/articles");

export function getSortedArticles() {
  const files = fs.readdirSync(articlesDirectory);

  const articles = files.map((file) => {
    const id = file.replace(/\.mdx?$/, "");

    const fullPath = path.join(articlesDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    console.log({ id, ...data });
    return { id, ...data };
  });

  // sort articles by date
  return articles.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
}
