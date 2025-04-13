import React from "react";
import img from "/corelai-logo.svg";

export const CorelaiLogo: React.FC = () => {
    return (<div className="relative border-white">
        <a href="/">
            <span className="absolute inset-0"></span>
        </a>
        <div className="flex flex-row">
            <div className="text-white font-orbitron text-xl sm:text-4xl uppercase   whitespace-nowrap">
                C
                <div className="w-5 h-5 sm:w-9 sm:h-9 inline-block sm:pt-0.5">
                    <img src={img} alt="logo"/>
                </div>
                relai
            </div>
            <div
                className="text-stone-200 text-xs sm:text-lg font-oxanium font-[400] uppercase
                -translate-x-11 translate-y-6
                sm:-translate-x-16 sm:translate-y-9">
                sector
            </div>
            {/*<span className="text-gold">prime</span>*/}
        </div>
    </div>);
}