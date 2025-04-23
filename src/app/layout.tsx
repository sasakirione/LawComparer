import type { Metadata } from "next";
import "./globals.css";
import React from "react";



export const metadata: Metadata = {
  title: "Law Comparer",
  description: "日本の刑法の法定刑が簡単に比較できるサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
