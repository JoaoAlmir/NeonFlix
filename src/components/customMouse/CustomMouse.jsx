import React, { useRef, useEffect } from "react";
import "./CustomMouse.css";



export function CustomMouse({ cursorImage }) {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (cursorRef.current) {
                const mouseX = event.clientX - 8;
                const mouseY = event.clientY - 2;
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = "translate3d(-9999px, -9999px, 0)";
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return <img id="cursor" src={cursorImage} alt="Custom Mouse" ref={cursorRef} />;
}
