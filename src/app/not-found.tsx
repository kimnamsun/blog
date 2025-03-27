import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">
        Not Found
      </h1>
      <p className="sm:text-md mt-2 text-sm text-gray-600 lg:text-lg">
        페이지를 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg px-6 py-3 text-sm font-medium transition-colors sm:text-base"
      >
        홈으로
      </Link>
    </div>
  );
};

export default NotFoundPage;
