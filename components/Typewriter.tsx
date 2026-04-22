"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  lines,
  onComplete,
}: {
  lines: string[];
  onComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setIsTypingDone(true);
      onComplete?.();
      return;
    }

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80); // typing speed

      return () => clearTimeout(timeout);
    } else {
      // move to next line
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 350);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
      {displayedText}
      {!isTypingDone && (
        <span className="ml-1 animate-cursor text-pink-500">|</span>
      )}
    </p>
  );
}
