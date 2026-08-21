"use client";

import { useState } from "react";

const hobbies = ["Badminton", "Piano", "Cooking", "Volleyball", "Hiking"];

function toImagePath(hobby: string) {
  return `/hobbies/${hobby.toLowerCase()}.jpg`;
}

function HobbyPill({ hobby }: { hobby: string }) {
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setCursor(null)}
    >
      <div className="cursor-default rounded border border-border px-4 py-2 text-sm text-text-body transition-colors hover:border-accent hover:text-accent">
        {hobby}
      </div>

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
  return (
    <section
      id="hobbies"
      className="flex flex-col justify-center px-8 pt-10 mb-40 font-mono"
    >
      <div className="text-text-dim text-sm mb-5 ">~/about $ ls hobbies/</div>

      <div className="flex flex-wrap gap-3">
        {hobbies.map((hobby) => (
          <HobbyPill key={hobby} hobby={hobby} />
        ))}
      </div>
    </section>
  );
}
