const contacts = [
  {
    href: "mailto:david.liu906@gmail.com",
    action: "mail",
    value: "david.liu906@gmail.com",
  },
  {
    href: "https://linkedin.com/in/davidliu906",
    action: "open",
    value: "linkedin.com/in/davidliu906",
  },
  {
    href: "https://github.com/Davooood90",
    action: "open",
    value: "github.com/Davooood90",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center px-8 py-20 font-mono"
    >
      <div className="text-text-dim text-sm mb-5 ">~/contact $ open --all</div>
      <h1 className="font-mono text-3xl font-semibold mb-10">Get in Touch</h1>

      <p className="mb-8 text-[17px] leading-[1.6] text-text-body text-pretty">
        Open to co-op and internship opportunities, and always happy to chat!
      </p>

      <div className="flex flex-col gap-3.5 text-[15px]">
        {contacts.map((contact) => {
          const isExternal = contact.href.startsWith("http");
          return (
            <a
              key={contact.href}
              href={contact.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-text-body transition-colors hover:text-text-strong"
            >
              → {contact.action}{" "}
              <span className="text-accent">{contact.value}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
