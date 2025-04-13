import React from "react";
import img from "/corelai-logo.svg";

export const CorelaiLogo: React.FC = () => {
    return (<div className="relative">
        <a href="/">
            <span className="absolute inset-0"></span>
        </a>
        <div className="flex flex-row">
            <div className="text-white font-orbitron text-4xl uppercase   whitespace-nowrap">
                C
                <div className="w-9 h-9 inline-block pt-0.5">
                    <img src={img} alt="logo"/>
                </div>
                relai
            </div>
            <div
                className="text-stone-200 text-1xl font-oxanium font-[400] uppercase  -translate-x-15 translate-y-9">
                sector
            </div>
            {/*<span className="text-gold">prime</span>*/}
        </div>
    </div>);
}