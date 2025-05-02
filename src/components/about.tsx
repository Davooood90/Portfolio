export default function AboutPage() {
  return (
    <div className="flex flex-col h-screen  px-80">
      <div className="flex text-lightblue p-8 pt-24 items-center">
        <h1 className="text-6xl mr-4">David Liu</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M8 2.5a1.22 1.22 0 0 1 1.25 1.17A1.21 1.21 0 0 1 8 4.84a1.21 1.21 0 0 1-1.25-1.17A1.22 1.22 0 0 1 8 2.5m0 8.66a1.17 1.17 0 1 1-1.25 1.17A1.21 1.21 0 0 1 8 11.16m0-4.33a1.17 1.17 0 1 1 0 2.34a1.17 1.17 0 1 1 0-2.34"
          />
        </svg>
        <div className="flex gap-6 ml-20">
          <a href="/#about">
            <button className="cursor-pointer bg-midblue p-2 px-6 text-xl rounded-3xl border-1 border-midblue hover:border-lightblue transition duration-300">
              Overview
            </button>
          </a>
          <a href="/experiences">
            <button className="cursor-pointer bg-midblue p-2 px-6 text-xl rounded-3xl border-1 border-midblue hover:border-lightblue transition duration-300">
              Experiences
            </button>
          </a>
          <a href="/projects">
            <button className="cursor-pointer bg-midblue p-2 px-6 text-xl rounded-3xl border-1 border-midblue hover:border-lightblue transition duration-300">
              Projects
            </button>
          </a>
          <a href="/#contact">
            <button className="cursor-pointer bg-midblue p-2 px-6 text-xl rounded-3xl border-1 border-midblue hover:border-lightblue transition duration-300">
              Contact
            </button>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
}
