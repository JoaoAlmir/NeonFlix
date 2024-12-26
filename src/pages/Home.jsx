import React from 'react';
import "./Home.css";
import { FlipWordsDemo } from '../components/FlipWordsDemo';
import { LampDemo } from '../components/LampDemo';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ThreeDCardDemo } from '../components/ThreeDCardDemo';

const Home = () => {
    return (
        <>
            <div className='background'>
                <FlipWordsDemo />
            </div>

            <div className='background bg-gray-950'>
                <ThreeDCardDemo />
                
            </div>
            <div className='bg-people ' />


        </>
    );
};

export default Home;