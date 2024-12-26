import React from "react";
import { FlipWords } from "./config/flip-words";

export function FlipWordsDemo() {
  const words = 
[
    "Ação",
    "Aventura",
    "Comédia",
    "Drama",
    "Terror",
    "Suspense",
    "Romance",
    "Ficção Científica",
    "Fantasia",
    "Animação",
    "Documentário",
    "Musical",
    "Biografia",
    "História",
    "Mistério",
    "Faroeste"
]

  return (
    (<div className="h-[40rem] flex justify-center items-center px-6">
      <div
        className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Assista
        <b><FlipWords words={words} /> <br /></b>
        no NeonFlix
      </div>
    </div>)
  );
}
