import { LayoutProps } from "@/@types/layout";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kimnamsun | Frontend Engineer",
  description: "Kimnamsun | Frontend Engineer",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Kimnamsun" }],
  creator: "Kimnamsun",
  publisher: "Kimnamsun",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kimnamsun | Frontend Engineer",
    description: "Kimnamsun | Frontend Engineer",
  },
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <>{children}</>
      </body>
    </html>
  );
};

export default RootLayout;
