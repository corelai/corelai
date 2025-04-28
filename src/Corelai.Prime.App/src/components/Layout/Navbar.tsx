import React from 'react';
import {ThemeToggleButton} from "../ThemeToggleButton/ThemeToggleButton.tsx";
import MediaRuler from "../UI/MediaRuler.tsx";


const Navbar: React.FC = () => {
    return (
        <div className="fixed w-full  flex justify-end

        border-t-4 sm:border-t-6 md:border-t-8 golden-border z-1
        pt-5 pe-5
        ">

            <ThemeToggleButton className="

                size-8
                rounded-full
                transition-colors
                text-surface-400
                hover:text-gold-400
                dark:text-surface-300
                dark:hover:text-gold-400
                text-center
                self-center
            "
                               iconClassName="size-6 sm:size-12"
            />
            <MediaRuler show={false}/>
        </div>
    );
};

export default Navbar;
