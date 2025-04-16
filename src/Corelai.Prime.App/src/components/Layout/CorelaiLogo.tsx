import React from "react";
import {CorelaiLaurel} from "../UI/CorelaiLaurel.tsx";


export const CorelaiLogo: React.FC = () => {
    return (
        <div className="relative
        py-3
        ">
            <a href="/" className="">
                <span className="absolute inset-0"></span>
            </a>
            <div className="
                flex
            flex-row
            sm:flex-col
            items-center
            ">
                <div className="flex flex-row">
                    <div className="
                        size-8 pt-0.5
                        sm:size-13
                    ">
                        <CorelaiLaurel className="size-full text-primary"/>
                    </div>
                    <div className="text-primary/65 font-orbitron tracking-widest
                                    pt-3
                                    sm:pt-5
                                    text-lg
                                    sm:text-4xl
                                    uppercase
                                    whitespace-nowrap">
                        orelai
                    </div>
                </div>
                <div
                    className="text-division  font-oxanium font-[400] uppercase
                self-end pb-0.5 ps-3
                sm:self-auto sm:pb-0 sm:ps-0
                text-xs
                sm:text-sm
                md:text-lg

                {/*-translate-x-11 translate-y-8*/}
                {/*sm:-translate-x-13 sm:translate-y-13*/}
                {/*md:-translate-x-16 */}
                ">
                    sector // prime
                </div>
            </div>
        </div>
    );
}