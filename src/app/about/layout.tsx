import { LayoutProps } from "@/@types/layout";

export default function AboutLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-[800px] flex-col rounded-lg py-2 pb-4 pt-6 sm:py-4 sm:pb-6 sm:pt-8 lg:pb-8 lg:pt-10">
        <main className="grow">{children}</main>
      </div>
    </div>
  );
}
