"use client";

import { useEffect, useState } from "react";

const TYPE_DELAY = 90;
const DELETE_DELAY = 45;
const HOLD_DELAY = 2000;

export function Typewriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const delay = deleting
      ? DELETE_DELAY
      : text === word
        ? HOLD_DELAY
        : TYPE_DELAY;

    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span>
      {text}
      <span className="typewriter-caret" aria-hidden />
    </span>
  );
}
