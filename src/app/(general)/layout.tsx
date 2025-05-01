import Navbar from "../../components/navbar";
import "../index.css";

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
      <body className="font-jersey bg-gradient-to-b from-darkblue to-[#153041] h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
