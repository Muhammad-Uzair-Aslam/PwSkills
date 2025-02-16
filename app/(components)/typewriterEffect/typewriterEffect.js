"use client";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["PRACTICAL", "AFFORDABLE", "EASY"],
        autoStart: true,
        loop: true,
        delay: 75, // Adjust typing speed if needed
        pauseFor: 3000, // Time to wait before starting next word
      }}
    />
  );
};

export default TypewriterEffect;
