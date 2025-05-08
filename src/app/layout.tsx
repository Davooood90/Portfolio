import Navbar from "../components/navbar";
import "./index.css";
import Footer from "../components/footer";
import React, { Suspense } from "react";

export const metadata = {
  title: "David's Portfolio",
  description:
    "Hi! My name is David. I am a Computer Science student at the University of British Columbia, graduating 2028.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-darkblue">
      <body className="font-jersey">
        <Suspense fallback={<div>Loading experiences...</div>}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
