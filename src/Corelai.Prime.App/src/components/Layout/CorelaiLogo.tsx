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
        py-3 perspective-[500px] perspective-origin-center
        ">
            <a href="/" className="">
                <span className="absolute inset-0"></span>
            </a>

            {/*ring*/}
            <div id="corelaiRing"
                 className={` bg-lime-500/0 
                 
                 ${rotation} transform-style-preserve-3d                 
                 absolute
                 
                 h-[300%] w-[120%] -top-[140%] -left-[10%]
                 sm:h-[300%] sm:w-[180%] sm:-top-[175%] sm:-left-[16%]
                 md:h-[300%] md:w-[189%] md:-top-[219%] md:-left-[20%]
                 `}>
                {/*<div className={`z-1 h-5 w-15  ${rotation} transform-style-preserve-3d */}
                {/*        dark:bg-surface-900/30 bg-surface-100 absolute*/}
                {/*        h-[30%] w-[120%] top-[120%] -left-[40%]*/}
                {/*        `}>*/}

                {/*</div>*/}
            </div>

            <div className={`${rotation} translate-x-6  translate-z-32 transform-style-preserve-3d   
                flex
            flex-col
            items-center`}
            >


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
        </motion.div>
        </AnimatePresence>
    );
}