import React from "react";
import {CorelaiLaurel} from "../UI/CorelaiLaurel.tsx";


export const CorelaiLogo: React.FC = () => {
    return (<div className="relative ">
        <a href="/">
            <span className="absolute inset-0"></span>
        </a>
        <div className="flex flex-row">
            <div className="
                translate-x-0.5
                sm:translate-x-1

                size-8 pt-0.5
                sm:size-13
                md:size-12 md:pt-0.5">
                <CorelaiLaurel className="size-full text-primary"/>
            </div>
            <div className="text-primary/80 font-orbitron
            pt-3
            sm:pt-5
            text-lg
            sm:text-4xl
            uppercase
            whitespace-nowrap">
                orelai
            </div>
            <div
                className="text-division  font-oxanium font-[400] uppercase
                text-xs
                sm:text-sm
                md:text-lg

                md:text-blue-500
                -translate-x-11 translate-y-8
                sm:-translate-x-13 sm:translate-y-13">
                sector
            </div>
        </div>
    </div>);
}