import React from 'react';
import "./Home.css";
import { FlipWordsDemo } from '../components/FlipWordsDemo';
import { LampDemo } from '../components/LampDemo';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ThreeDCardDemo } from '../components/ThreeDCardDemo';
import { BackgroundGradientAnimationDemo } from '../components/BackgroundGradientAnimationDemo';
import imgPeople from '../assets/tvpeople.png';

const Home = () => {
    return (
        <>
            <div className='background'>
                <BackgroundGradientAnimationDemo/>
            </div>

            <div className='background bg-gray-950'>
                <ThreeDCardDemo />
            </div>
            
            <div className='background-people'>
                <img src={imgPeople} alt="TV People" className="tv-people-image" />
            </div>

            <div className='background'>
                <LampDemo />
            </div>
        </>
    );
};

export default Home;