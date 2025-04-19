import React, {useEffect, useState} from "react";
import {CorelaiLaurel} from "../UI/CorelaiLaurel.tsx";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";


export const CorelaiLogo: React.FC = () => {
    const [rotation, setRotation] = useState<string>('rotate-y-[0deg]');
    useEffect(
        () => {
            setTimeout(() => {
                setRotation('rotate-y-[0deg]');
            }, 101);

        }, []
    );

    return (
        <div className="relative
        py-3 perspective-[500px] perspective-origin-center
        ">
            <a href="/" className="">
                <span className="absolute inset-0"></span>
            </a>

            {/*ring*/}
            <div id="corelaiRing"
                 className={` bg-lime-500/30
                 ${rotation} transform-style-preserve-3d                 
                 absolute
                 -z-1  
                 h-[300%] w-[120%] -top-[100%] -left-[10%]
                 `}>
                <div className="z-1 h-5 w-15 dark:bg-surface-900 bg-surface-100 absolute bottom-0 left-0"></div>
            </div>

            <div className="
                flex
            flex-col
            items-center
            ">


                {/*CORELAI*/}
                <div className="flex flex-row">
                    <div className="
                        size-16
                        sm:size-15 sm:pt-2
                        md:size-18
                    ">
                        <CorelaiLaurel className="
                        size-full
                        text-writing-900
                        dark:text-writing-100"/>
                    </div>
                    <div className="text-writing-800
                                    dark:text-writing-200
                                    font-orbitron
                                    tracking-widest
                                    pt-3
                                    sm:pt-5

                                    text-5xl
                                    sm:text-5xl
                                    md:text-6xl
                                    uppercase
                                    whitespace-nowrap">
                        orelai
                    </div>
                </div>


                {/*sector prime*/}
                <div
                    className="
                    text-writing-800
                      dark:text-writing-200

                    font-oxanium font-[400] uppercase
                     pb-0.5 ps-3
                     sm:pb-0 sm:ps-0
                    text-base
                    sm:text-2xl
                    md:text-3xl
                    md:leading-[3rem]
                    flex align-center gap-x-1
                ">
                    <SlArrowLeft className="
                    text-[0.5rem]
                    sm:text-[0.8rem]
                    md:text-[1rem]
                    sm:pb-1
                    "/>
                    sector
                    <span
                        className="
                    text-gold-600"
                    > prime </span>
                    <SlArrowRight className="
                    text-[0.5rem]
                    sm:text-[0.8rem]
                    md:text-[1rem]
                    sm:pb-1
                    "/>
                </div>
            </div>
        </div>
    );
}