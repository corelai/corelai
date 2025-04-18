import React from 'react';
import {CorelaiLogo} from "./CorelaiLogo.tsx";
import {ThemeToggleButton} from "../ThemeToggleButton/ThemeToggleButton.tsx";


const MediaSpy = () => {
    return (
        <div className={`fixed left-0`}>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] block sm:hidden w-[30rem]`}>Mobile 30rem</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden sm:block md:hidden bg-red-400 w-[48rem]`}>SM 30-48rem 480px-768px</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden md:block lg:hidden bg-amber-400 w-[64rem]`}>MD 48-64rem 768px-1024px</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden lg:block xl:hidden bg-green-400 w-[80rem]`}>LG 64-80rem 1024px-1280px</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden xl:block 2xl:hidden bg-sky-400 w-[96rem]`}>XL 80-96rem 1280px-1536px</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden 2xl:block n bg-purple-400 w-screen`}>2XL &gt;96rem &gt;1536px</div>
        </div>
    )
}

const Header: React.FC = () => {
    return (
        <div
            className="
             border-t-4 sm:border-t-6 md:border-t-8 golden-border
             flex justify-center
             relative
             ">
            <MediaSpy/>
            <CorelaiLogo/>
            <ThemeToggleButton className="
            rounded-full
            transition-colors
            text-gold-500
            hover:text-gold-400
            dark:text-gold-600
            dark:hover:text-gold-400
            text-center
            self-center
            absolute
            right-2 sm:right-4
            top-2 sm:top-4
            "
                               moonClassName="size-6 sm:size-12"
            />
        </div>
    );
};


export default Header;
