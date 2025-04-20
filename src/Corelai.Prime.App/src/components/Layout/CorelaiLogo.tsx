import React, {useEffect, useState} from "react";
import {CorelaiLaurel} from "../UI/CorelaiLaurel.tsx";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {AnimatePresence, motion} from "framer-motion";


export const CorelaiLogo: React.FC = () => {
    const [rotation, setRotation] = useState<string>('rotate-y-[0deg]');
    useEffect(
        () => {
            setTimeout(() => {
                setRotation('rotate-y-[40deg]');
            }, 101);

        }, []
    );

    return (
        <AnimatePresence>
        <motion.div initial={{opacity:0}} animate={{ opacity: 1 }} transition={{ duration: 2,delay: 0.3 }}
                    className="relative bg-pink-400/0
        py-3 perspective-[800px] perspective-origin-center
        ">
            <a href="/" className="">
                <span className="absolute inset-0"></span>
            </a>

            {/*md:h-[300%] md:w-[189%] md:-top-[219%] md:-left-[20%]*/}
            {/*ring*/}
            <div id="corelaiRing"
                 className={` bg-lime-500/0 
                 opacity-100
                 ${rotation} transform-style-preserve-3d                 
                 absolute
                 
                 h-[220%] w-[200%] -top-[100%] -left-[28%]
                 
                 sm:h-[300%] sm:w-[148%] sm:-top-[148%] sm:-left-[10%]
                 
                 md:h-[200%] md:w-[160%] md:-top-[120%] md:-left-[25%]
                 `}>

                {/*<div className={`z-1 h-5 w-15  ${rotation} transform-style-preserve-3d */}
                {/*        dark:bg-surface-900 bg-surface-100 absolute*/}
                {/*        h-[30%] w-[80%] top-[110%] -left-[40%]*/}
                {/*        `}>*/}
                {/*</div>*/}


            </div>

            <div className={`${rotation} translate-x-6  translate-z-32 transform-style-preserve-3d   
                flex
            flex-col
            items-center            
            bg-sky-500/0
            `}
            >


                {/*CORELAI*/}
                <div className="flex flex-row
                    ">
                    {/*Laurel*/}
                    <div className="
                        size-16
                        sm:size-18 sm:pt-2
                        md:size-32 md:pt-0
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
                                    sm:text-6xl
                                    md:text-8xl
                                    uppercase
                                    whitespace-nowrap">
                        orelai
                    </div>
                </div>


                {/*sector prime*/}
                <div
                    className="
                    pe-14
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
                    text-gold-300"
                    > prime </span>
                    <SlArrowRight className="
                    text-[0.5rem]
                    sm:text-[0.8rem]
                    md:text-[1rem]
                    sm:pb-1
                    "/>
                </div>
            </div>
        </motion.div>
        </AnimatePresence>
    );
}