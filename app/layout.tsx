import Nav from "@components/Nav";
import "@styles/globals.css";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Origami Flower",
  description: "Home of Origami Paper Flowers",
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Nav />
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
