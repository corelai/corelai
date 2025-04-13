import React from 'react';
import {ThemeToggleButton} from "../ThemeToggleButton/ThemeToggleButton.tsx";

const Navbar: React.FC = () => {
    return (
        <div className="bg-secondary-surface flex justify-end pt-2 pe-2">
            <ThemeToggleButton/>
        </div>
    );
};

export default Navbar;
