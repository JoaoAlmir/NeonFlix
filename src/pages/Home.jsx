import React from 'react';
import "./Home.css";
import { FlipWordsDemo } from '../components/FlipWordsDemo';
import { LampDemo } from '../components/LampDemo';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ThreeDCardDemo } from '../components/ThreeDCardDemo';

const Home = () => {
    return (
        <>
            <div className='parallax-content'>
                <FlipWordsDemo />
            </div>

            <div className='parallax-content'>
                <ThreeDCardDemo />
            </div>
        </>
    );
};

export default Home;