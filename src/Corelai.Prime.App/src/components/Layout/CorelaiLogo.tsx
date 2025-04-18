import React from "react";
import {CorelaiLaurel} from "../UI/CorelaiLaurel.tsx";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";


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
                        <CorelaiLaurel className="
                        size-full
                        text-writing-900"/>
                    </div>
                    <div className="text-writing-800
                                    font-orbitron
                                    tracking-widest
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
                    className="text-writing-800 font-oxanium font-[400] uppercase
                self-end pb-0.5 ps-3
                sm:self-auto sm:pb-0 sm:ps-0
                text-xs
                sm:text-sm
                md:text-lg

                flex align-center gap-x-1
                ">
                    <SlArrowLeft className="
                    text-[0.3rem]
                    sm:text-[0.5rem]
                    " />
                    sector
                    <span
                    className="
                    text-gold-600"
                    > prime </span>
                    <SlArrowRight className="
                    text-[0.3rem]
                    sm:text-[0.5rem]
                    " />
                </div>
            </div>
        </div>
    );
}