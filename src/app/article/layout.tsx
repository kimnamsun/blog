import { LayoutProps } from "@/@types/layout";
import Link from "next/link";

const ArticleLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-[800px] flex-col rounded-lg">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-gray-50 py-2 pb-4 pt-6 sm:py-4 sm:pb-6 sm:pt-8 lg:pb-8 lg:pt-10">
          <div className="flex items-baseline justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 transition-colors sm:text-2xl lg:text-3xl"
            >
              &lt;kimnamsun/&gt;
            </Link>
            {/* <div className="flex gap-4 sm:gap-6">
              <Link
                href="/about"
                className="text-sm text-gray-600 transition-colors sm:text-base"
              >
                About
              </Link>
            </div> */}
          </div>
        </header>

        {/* Main */}
        <main className="grow">{children}</main>

        {/* Footer */}
        <footer className="pb-6 pt-8 sm:pb-8 lg:pb-10">
          <hr className="mb-4 border-gray-200" />
          <div className="flex items-center justify-between text-xs text-gray-600 sm:text-sm">
            <span>© 2025 by kimnamsun</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ArticleLayout;
