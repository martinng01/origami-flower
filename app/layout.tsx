import Nav from "@components/Nav";
import "@styles/globals.css";
import React, { ReactNode } from "react";

export const metadata = {
  title: "Origami Flower",
  description: "Home of Origami Paper Flowers",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
