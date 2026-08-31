"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 35,
}: {
  text: string;
  speed?: number;
}) {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (chars >= text.length) return;
    const timeout = setTimeout(() => setChars((c) => c + 1), speed);
    return () => clearTimeout(timeout);
  }, [chars, text, speed]);

  return (
    <>
      {text.slice(0, chars)}
      <span className="animate-blink">_</span>
    </>
  );
}
