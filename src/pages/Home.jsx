import React from 'react';
import "./Home.css";
import { FlipWordsDemo } from '../components/FlipWordsDemo';
import { LampDemo } from '../components/LampDemo';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ThreeDCardDemo } from '../components/ThreeDCardDemo';
import { BackgroundGradientAnimationDemo } from '../components/BackgroundGradientAnimationDemo';

const Home = () => {
    return (
        <>
            <div className='background'>
                <BackgroundGradientAnimationDemo/>

            </div>

            <div className='background bg-gray-950'>
                <ThreeDCardDemo />

            </div>
            <div className='bg-people ' >

            </div>

            <div>
                <LampDemo />
            </div>








        </>
    );
};

export default Home;