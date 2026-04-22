"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { BirthdayContent } from "../config/types";
import MediaRenderer from "./MediaRenderer";
import { Great_Vibes } from "next/font/google";
import Typewriter from "./Typewriter";

const dancing_script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Card({ content }: { content: BirthdayContent }) {
  const [step, setStep] = useState(0);

  const current = content.steps[step];

  const nextStep = () => {
    if (step === content.steps.length - 2 && content.confetti) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
      });
    }

    setStep((prev) => prev + 1);
  };

  return (
    <div className="relative animate-card bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-10 text-center max-w-md w-full border border-white/30">
      <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-yellow-400/20 blur-xl opacity-50"></div>
      <div className="flex items-center justify-center gap-3 mb-4">
        {/* Left Cake */}
        <span className="text-4xl md:text-6xl">{content.preTitle}</span>

        {/* Title */}
        <h1
          className={`${dancing_script.className} text-4xl md:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent`}
        >
          {content.title}
        </h1>

        {/* Right Cake */}
        <span className="text-4xl md:text-6xl">{content.postTitle}</span>
      </div>

      {step === 0 && (
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          {content.intro}
        </p>
      )}

      {/* Intro */}
      {current.type === "intro" && (
        <button
          onClick={nextStep}
          className="mt-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 text-lg md:text-xl rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-200"
        >
          🎁 {current.buttonText} 🎁
        </button>
      )}

      {/* Tease */}
      {current.type === "tease" && (
        <>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            {current.text}
          </p>
          <button
            onClick={nextStep}
            className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 text-lg md:text-xl rounded-full font-medium shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-200"
          >
            ✨ {current.buttonText}
          </button>
        </>
      )}

      {/* Message */}
      {current.type === "message" && (
        <div>
          <MediaRenderer media={content.media} />

          <h2 className="text-2xl font-semibold text-purple-700 mb-3">
            Dear {content.name},
          </h2>

          <Typewriter lines={current.lines} />

          <p className="mt-4 text-lg font-semibold text-pink-600 animate-fadeIn">
            {current.closing}
          </p>

          <div className="mt-6 text-sm text-gray-600 bg-white/60 rounded-lg px-4 py-2 border border-white/40">
            <span className="font-medium text-pink-600">PS:</span>{" "}
            {content.insideJoke}
          </div>
        </div>
      )}
    </div>
  );
}
