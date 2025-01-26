import React, { useEffect } from 'react';
import "./Home.css";
import { LampDemo } from '../../components/LampDemo';
import { ThreeDCardDemo } from '../../components/ThreeDCardDemo';
import { BackgroundGradientAnimationDemo } from '../../components/BackgroundGradientAnimationDemo';
import imgPeople from '../../assets/tvPeople.png';
import { HeroParallaxDemo } from '../../components/HeroParallaxDemo';

const Home = () => {

    // Update scroll position on scroll event
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Parallax effect calculation
    const [scrollY, setScrollY] = React.useState(0);
    const parallaxSpeed = 0.17; // How much slower the background moves compared to scroll
    const parallaxOffset = -scrollY * parallaxSpeed;

    // Calculate gap based on scroll position
    const maxGap = 50; // Maximum gap in pixels
    const minGap = 2; // Minimum gap in pixels
    const gapRange = maxGap - minGap;
    const gap = maxGap - (scrollY * 0.1); // Adjust the multiplier as needed
    const adjustedGap = Math.max(minGap, Math.min(maxGap, gap));

    return (
        <>
            <div className='background'>
                <BackgroundGradientAnimationDemo />
            </div>

            <div className='background bg-gray-950 tvDiv'>
                <h2>Para unir toda</h2>
                <div className='family' style={{ gap: `${adjustedGap}px` }}>
                    <h2>F</h2>
                    <h2>A</h2>
                    <h2>M</h2>
                    <h2>I</h2>
                    <h2>L</h2>
                    <h2>I</h2>
                    <h2>A</h2>
                </div>

                <ThreeDCardDemo />
            </div>

            <div
                className='background-people'
                style={{
                    transform: `translateY(${parallaxOffset}px)`, // Apply parallax effect
                    transition: 'transform 0.1s ease-out', // Smooth the transition
                }}
            >
                <img src={imgPeople} alt="TV People" className="tv-people-image" />
            </div>

            <div className='background'>
                <HeroParallaxDemo />
            </div>

            <div className='background'>
                <LampDemo />
            </div>
        </>
    );
};

export default Home;