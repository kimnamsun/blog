import { getAllArticles } from "@/utils/article";
import Link from "next/link";

const ArticlePage = async () => {
  const articles = getAllArticles();

  return (
    <div className="space-y-8">
      {articles
        .filter(({ show }) => show)
        .map(({ title, date }) => (
          <div key={date}>
            <div className="border-l-4 border-gray-200 pl-4">
              <Link
                href={`/article/${date}`}
                className="sm:text-medium text-base font-medium text-gray-800"
              >
                {title}
              </Link>
              <p className="mt-0.5 text-xs text-gray-600 sm:text-xs">
                {new Date(date).toISOString().split("T")[0]}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export const dynamicParams = false;

export default ArticlePage;
