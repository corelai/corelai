import React from 'react';
import {ThemeToggleButton} from "../ThemeToggleButton/ThemeToggleButton.tsx";

const Navbar: React.FC = () => {
    return (
        <div className="bg-secondary-surface text-secondary flex justify-end py-2 pe-2">
            <p className="pe-2 font-encode uppercase text-xs">Colony level 1</p>
            <ThemeToggleButton/>
        </div>
    );
};

export default Navbar;
