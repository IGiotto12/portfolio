import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiaqi Wu",
  description: "A Talented Math-CS Student at UCSD - Jiaqi Wu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <div className="bcg">
          {children}
        </div>
        <footer>
          <p>© 2025 Jiaqi&apos;s Portfolio | jiaqiwu1224@gmail.com</p>
        </footer>
      </body>
    </html>
  );
}
