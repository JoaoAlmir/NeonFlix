import React from 'react';
import "./Home.css";
import { FlipWordsDemo } from '../components/FlipWordsDemo';
import { LampDemo } from '../components/LampDemo';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ThreeDCardDemo } from '../components/ThreeDCardDemo';
import { BackgroundGradientAnimationDemo } from '../components/BackgroundGradientAnimationDemo';
import imgPeople from '../assets/tvpeople.png';
import { HeroParallax } from '../components/config/hero-parallax';
import { HeroParallaxDemo } from '../components/HeroParallaxDemo';

const Home = () => {
    return (
        <>
            <Parallax pages={4}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <div className='background'>
                        <BackgroundGradientAnimationDemo />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0.99} speed={0.1}>
                    <div className='background bg-gray-950'>
                        <ThreeDCardDemo />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.3} speed={0.6} >
                    <div className='background-people'>
                        <img src={imgPeople} alt="TV People" className="tv-people-image" />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.8} speed={0.5}>
                    <div className='background'>
                        <LampDemo />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.4} speed={0.5}>
                    <div className='background'>
                        <HeroParallaxDemo />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

            export default Home;