import React from "react";
import {CorelaiLaurel} from "../UI/CorelaiLaurel.tsx";


export const CorelaiLogo: React.FC = () => {
    return (<div className="relative border-white">
        <a href="/">
            <span className="absolute inset-0"></span>
        </a>
        <div className="flex flex-row">
            <div className="text-white font-orbitron text-xl sm:text-4xl uppercase   whitespace-nowrap">

                <div className="w-5 h-5 sm:size-12 inline-block sm:pt-0.5">
                    <CorelaiLaurel className="size-full text-white"/>
                </div>
                orelai
            </div>
            <div
                className="text-stone-200 text-xs sm:text-lg font-oxanium font-[400] uppercase
                -translate-x-11 translate-y-6
                sm:-translate-x-16 sm:translate-y-12">
                sector
            </div>
            {/*<span className="text-gold">prime</span>*/}
        </div>
    </div>);
}