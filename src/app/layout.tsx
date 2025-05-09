import Navbar from "../components/navbar";
import "./index.css";
import Footer from "../components/footer";
import React, { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "David's Portfolio",
  description: "Hi! My name is David and welcome to my corner of the internet!",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-darkblue">
      <body className="font-jersey">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
