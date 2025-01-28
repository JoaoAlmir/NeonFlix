"use client";
import React from "react";
import { HeroParallax } from "./config/hero-parallax";


export const products = [
    {
        title: "A Origem",
        thumbnail:
            "https://media.themoviedb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
    {
        title: "Interestelar",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
    {
        title: "O Cavaleiro das Trevas",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
        title: "Clube da Luta",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    },
    {
        title: "O Exterminador do Futuro 2: O Julgamento Final",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
    },  
    {
        title: "Matrix",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
        title: "Um Sonho de Liberdade",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
        title: "Forrest Gump: O Contador de Histórias",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    },
    {
        title: "O Poderoso Chefão",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    },
    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
        title: "Star Wars: Episódio IV - Uma Nova Esperança",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    },
    {
        title: "Os Vingadores",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    },
    {
        title: "Jurassic Park: O Parque dos Dinossauros",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    },
    {
        title: "Titanic",
        thumbnail:
            "https://image.tmdb.org/t/p/original/8MFJ4aAr85B5lVCecxGSd9iX6FX.jpg",
    },
    {
        title: "A Origem",
        thumbnail:
            "https://media.themoviedb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
    {
        title: "O Exterminador do Futuro 2: O Julgamento Final",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
    },
    {
        title: "Coringa",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
        title: "O Iluminado",
        thumbnail:
            "https://image.tmdb.org/tdb.org/t/p/w500/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg",
    },
    {
        title: "Coringa",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
        title: "Vingadores: Ultimato",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
    {
        title: "O Rei Leão",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    },
    {
        title: "Toy Story",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    },
    {
        title: "Procurando Nemo",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    },
    {
        title: "O Rei do Show",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/dfhztJRiElqmYW4kpvjYe1gENsD.jpg",
    },
    {
        title: "A Bela e a Fera",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
    },
    {
        title: "A Forma da Água",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/iLYLADGA5oKGM92Ns1j9CDgk3iI.jpg",
    },
];

export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
}