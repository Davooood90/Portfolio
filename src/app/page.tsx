const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-8">
      <section className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-semibold text-text-strong">
          David Liu
        </h1>
        <p className="max-w-prose text-text-body">
          CS @ UBC. Software Engineer. Previously at CaterDash.
        </p>
      </section>

      {sections.map(({ id, label }) => (
        <section
          key={id}
          id={id}
          className="flex min-h-screen flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="text-3xl font-semibold text-text-strong">
            {label}
          </h2>
          <p className="max-w-prose text-text-body">
            This section is under construction.
          </p>
        </section>
      ))}
    </main>
  );
}
