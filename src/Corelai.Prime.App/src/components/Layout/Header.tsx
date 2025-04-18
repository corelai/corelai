import React from 'react';
import {CorelaiLogo} from "./CorelaiLogo.tsx";
import {ThemeToggleButton} from "../ThemeToggleButton/ThemeToggleButton.tsx";

const Header: React.FC = () => {
    return (
        <div
            className="
             border-t-4 sm:border-t-6 md:border-t-8 golden-border
             flex justify-center
             ">
            <ThemeToggleButton className="
            rounded-4xl
            border-2
            transition-colors
            border-gold-600
            hover:border-gold-800
            text-gold-600
            hover:text-gold-800
            border-dashed
            w-24
            h-8
            text-center
            self-center
            p-0.5
            "/>
            <CorelaiLogo/>
        </div>
    );
};


export default Header;
