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
        ]

    return (
        (<div className="h-[40rem] flex justify-center items-center px-6">
            <div
                className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                <span style={{color:"white"}} >Assista</span>
                <b className="borderText"><FlipWords words={words} /> <br /></b>
                <span style={{color:"white"}}>{"na "}</span> 
                <span className="neonText">NeonFlix</span>

            </div>
        </div>)
    );
}
