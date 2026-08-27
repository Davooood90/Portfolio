import { links } from "@/content/profile";

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
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-text-body transition-colors hover:text-text-strong"
          >
            → {link.action}{" "}
            <span className="text-accent">{link.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
