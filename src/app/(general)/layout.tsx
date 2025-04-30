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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
