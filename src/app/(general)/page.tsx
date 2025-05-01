import Link from "next/link";
import LandingPage from "../../components/landing";

export default function Home() {
  return (
    <>
      <div className="custom-gradient">
        <LandingPage />
      </div>
      <h1>Welcome home!</h1>
      <Link href="/projects">Projects</Link>
      <Link href="/experiences">Experiences</Link>
    </>
  );
}
