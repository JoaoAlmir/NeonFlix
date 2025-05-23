import React from "react";
import { CardBody, CardContainer, CardItem } from "./config/3d-card";
import tvGif from "../assets/tvGif.gif";


export function ThreeDCardDemo() {
return (
    <CardContainer className="inter-var">
        
        <CardBody
            className="bg-pink-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-pink-500/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-2">
            
            <CardItem translateZ="100" className="w-full">
                <img
                    src={tvGif}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail" />
            </CardItem>
        </CardBody>
    </CardContainer>
);
}
