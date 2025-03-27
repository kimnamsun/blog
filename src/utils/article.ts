import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "src/articles");

export type ArticleMetadata = {
  title: string;
  date: string;
  show?: boolean;
};

export type Article = {
  metadata: ArticleMetadata;
  content: string;
};

export const getAllArticles = (): ArticleMetadata[] => {
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const filePath = path.join(ARTICLES_DIR, file);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContents);

      return {
        title: data.title,
        date: new Date(data.date).toISOString().split("T")[0],
        show: data.show ?? true,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getArticle = async (slug: string) => {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContents);

  return {
    metadata: {
      title: data.title,
      date: new Date(data.date).toISOString().split("T")[0],
    },
    content,
  };
};
