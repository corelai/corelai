import React from "react";
import {CorelaiLaurel} from "../UI/CorelaiLaurel.tsx";


export const CorelaiLogo: React.FC = () => {
    return (<div className="relative ">
        <a href="/">
            <span className="absolute inset-0"></span>
        </a>
        <div className="flex flex-row">
            <div className="text-primary font-orbitron text-xl sm:text-4xl uppercase   whitespace-nowrap">

                <div className="size-7 sm:size-12 inline-block sm:pt-0.5">
                    <CorelaiLaurel className="size-full text-division"/>
                </div>
                orelai
            </div>
            <div
                className="text-primary/50 text-xs sm:text-lg font-oxanium font-[400] uppercase
                -translate-x-11 translate-y-7
                sm:-translate-x-16 sm:translate-y-12">
                sector
            </div>
            {/*<span className="text-gold">prime</span>*/}
        </div>
    </div>);
}