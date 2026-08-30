import { links } from "@/content/profile";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center py-12 font-mono sm:px-8 sm:py-20"
    >
      <div className="text-text-dim text-[13px] mb-4 sm:text-sm sm:mb-5">
        ~/contact $ open --all
      </div>
      <h1 className="font-mono text-2xl font-semibold mb-6 sm:text-3xl sm:mb-10">
        Get in Touch
      </h1>

      <p className="mb-6 text-[15px] leading-[1.6] text-text-body text-pretty sm:mb-8 sm:text-[17px]">
        Open to co-op and internship opportunities, and always happy to chat!
      </p>

      <div className="flex flex-col gap-1 text-[13px] sm:text-[15px]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="block py-1.5 [overflow-wrap:anywhere] text-text-body transition-colors hover:text-text-strong"
          >
            → {link.action}{" "}
            <span className="text-accent">{link.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
