import React from 'react';
import {CorelaiLogo} from "./CorelaiLogo.tsx";
import {ThemeToggleButton} from "../ThemeToggleButton/ThemeToggleButton.tsx";

const Header: React.FC = () => {
    return (
        <div
            className="
             border-t-4 sm:border-t-6 md:border-t-8 golden-border
             flex justify-center
             relative
             ">
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
