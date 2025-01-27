"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./config/lamp";
import { useNavigate } from "react-router-dom";
import "../pages/Home/Home.css";


export function LampDemo() {
  const nav = useNavigate();


  const handleClick = () => {
    const transitionElement = document.createElement("div");
    transitionElement.style.position = "fixed";
    transitionElement.style.top = 0;
    transitionElement.style.left = 0;
    transitionElement.style.width = "100%";
    transitionElement.style.height = "100%";
    transitionElement.style.background = "radial-gradient(circle, #ff00dd, #23b6c0)";
    transitionElement.style.zIndex = 9999;
    transitionElement.style.transition = "opacity 0.5s ease-in-out";
    transitionElement.style.opacity = 0;
    transitionElement.innerHTML = "<h1 class='neonText' style='text-align: center; margin-top: 20%; font-size: 3rem; animation: grow 0.5s forwards;'>NeonFlix</h1>";
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes grow {
      from { font-size: 3rem; }
      to { font-size: 7rem; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(transitionElement);

    requestAnimationFrame(() => {
      transitionElement.style.opacity = 1;
    });

    setTimeout(() => {
      nav("/dashboard");
    }, 500);

    setTimeout(() => {
      transitionElement.style.opacity = 0;
      setTimeout(() => {
        document.body.removeChild(transitionElement);
        document.head.removeChild(style);
      }, 500);
    }, 1500);
  };
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Milhares de experiências te aguardam
      </motion.h1>

      <button
        initial={{ opacity: 0.5 }}
        whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mt-8 mx-auto block rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-pink-600/50"
        onClick={handleClick}>
        Explore Agora
      </button>

    </LampContainer>
  );
}
