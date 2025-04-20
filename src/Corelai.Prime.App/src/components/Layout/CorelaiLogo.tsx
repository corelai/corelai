import React, {useEffect, useState} from "react";
import {CorelaiLaurel} from "../UI/CorelaiLaurel.tsx";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {AnimatePresence, motion} from "framer-motion";


export const CorelaiLogo: React.FC = () => {
    const [rotation, setRotation] = useState<string>('rotate-y-[0deg]');
    useEffect(
        () => {
            setTimeout(() => {
                setRotation('-rotate-y-[0deg]');
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
                 opacity-95
                 ${rotation} transform-style-preserve-3d                 
                 absolute
                 
                 h-[260%] w-[240%] -top-[90%] -left-[95%]
                 
                 sm:h-[260%] sm:w-[130%] sm:-top-[85%] sm:-left-[43%]
                 
                 md:h-[270%] md:w-[250%] md:-top-[95%] md:-left-[105%]
                 
                 lg:h-[300%] lg:w-[300%] lg:-top-[110%] lg:-left-[130%]
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
                        size-12 pt-1
                        sm:size-18 sm:pt-2
                        md:size-22 md:pt-2
                        lg:size-32 lg:pt-0
                    ">
                        <CorelaiLaurel className="
                        size-full
                        text-writing-100
                        dark:text-writing-100"/>
                    </div>
                    <div className="text-writing-200
                                    dark:text-writing-200
                                    font-orbitron
                                    tracking-widest
                                    pt-3
                                    sm:pt-5


                                    text-4xl
                                    sm:text-6xl
                                    md:text-7xl
                                    lg:text-8xl
                                    uppercase
                                    whitespace-nowrap">
                        orelai
                    </div>
                </div>


                {/*sector prime*/}
                <div
                    className="
                    pe-14
                    text-writing-200
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