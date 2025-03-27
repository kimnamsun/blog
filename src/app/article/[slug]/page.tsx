/* eslint-disable @typescript-eslint/no-require-imports */
import { getArticle } from "@/utils/article";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

type Props = {
  params: Promise<{ slug: string }>;
};

const DetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const { metadata, content } = article;

  return (
    <div className="my-6 flex flex-col gap-4 sm:my-12 sm:gap-6">
      <header className="space-y-2 border-b border-gray-200 pb-3 sm:space-y-3 sm:pb-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="break-keep text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
              {metadata.title}
            </h1>
            <div className="text-xs text-gray-500 sm:text-sm dark:text-gray-300">
              {metadata.date}
            </div>
          </div>
        </div>
      </header>
      <article className="markdown-body prose w-full max-w-[750px]">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkBreaks],
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: {
                      dark: "github-dark-dimmed",
                      light: "github-light",
                    },
                  },
                ],
                rehypeSlug,
              ],
            },
          }}
        />
      </article>
    </div>
  );
};

export default DetailPage;

export async function generateStaticParams() {
  const fs = require("fs");
  const path = require("path");
  const directory = path.join(process.cwd(), "src/articles");

  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs
    .readdirSync(directory)
    .filter((file: string) => file.endsWith(".mdx"))
    .map((file: string) => file.replace(".mdx", ""));

  return files.map((slug: string) => ({ slug }));
}
