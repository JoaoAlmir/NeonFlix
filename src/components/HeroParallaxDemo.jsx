"use client";
import React from "react";
import { HeroParallax } from "./config/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Inception"  ,
        thumbnail:
            "https://media.themoviedb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
    {
        title: "Interstellar",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
    {
        title: "The Dark Knight",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
        title: "Fight Club",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    },
    {
        title: "Pulp Fiction",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    },
    {
        title: "The Matrix",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
        title: "The Shawshank Redemption",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
        title: "Forrest Gump",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    },
    {
        title: "The Godfather",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
        title: "Star Wars: Episode IV - A New Hope",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    },
    {
        title: "The Avengers",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    },
    {
        title: "Jurassic Park",
        thumbnail:
            "https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    },
    {
        title: "Titanic",
        thumbnail:
            "https://image.tmdb.org/t/p/original/8MFJ4aAr85B5lVCecxGSd9iX6FX.jpg",
    },
];
