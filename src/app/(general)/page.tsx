import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href="/projects">Projects</Link>
      <Link href="/experiences">Experiences</Link>
    </>
  );
}
