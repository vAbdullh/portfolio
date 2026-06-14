"use client";

import React, { useState, useEffect } from "react";

export default function Typewriter({ 
  words, 
  typingSpeed = 80, 
  deletingSpeed = 40, 
  pauseTime = 1500,
  className = "" 
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    
    let timer;
    if (!isDeleting) {
      if (text !== currentWord) {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (text !== "") {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="animate-[pulse_1s_ease-in-out_infinite] opacity-70 ml-[1px] font-light">|</span>
    </span>
  );
}
