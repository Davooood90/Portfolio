"use client";

import { useEffect, useState } from "react";
import { hobbies } from "@/content/profile";

function toImagePath(hobby: string) {
  return `/hobbies/${hobby.toLowerCase()}.jpg`;
}

function useHasHover() {
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHasHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return hasHover;
}

const PILL_CLASS =
  "cursor-default rounded border border-border px-4 py-3 text-sm text-text-body transition-colors active:border-accent active:text-accent sm:py-2 [@media(hover:hover)]:hover:border-accent [@media(hover:hover)]:hover:text-accent";

function HobbyPill({ hobby, hasHover }: { hobby: string; hasHover: boolean }) {
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  if (!hasHover) {
    return <div className={PILL_CLASS}>{hobby}</div>;
  }

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setCursor(null)}
    >
      <div className={PILL_CLASS}>{hobby}</div>

      {cursor && (
        <div
          className="pointer-events-none absolute z-10 h-40 w-40 rounded-md border border-border-strong bg-surface bg-cover bg-center shadow-lg"
          style={{
            left: cursor.x + 12,
            top: cursor.y + 12,
            backgroundImage: `url(${toImagePath(hobby)})`,
          }}
        />
      )}
    </div>
  );
}

export default function HobbiesSection() {
  const hasHover = useHasHover();

  return (
    <section
      id="hobbies"
      className="flex flex-col justify-center pt-8 mb-16 font-mono sm:px-8 sm:pt-10 sm:mb-40"
    >
      <div className="text-text-dim text-[13px] mb-4 sm:text-sm sm:mb-5">
        ~/about $ ls hobbies/
      </div>

      <div className="flex flex-wrap gap-2.5">
        {hobbies.map((hobby) => (
          <HobbyPill key={hobby} hobby={hobby} hasHover={hasHover} />
        ))}
      </div>
    </section>
  );
}
