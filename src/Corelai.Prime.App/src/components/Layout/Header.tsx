import React from 'react';
import {CorelaiLogo} from "./CorelaiLogo.tsx";

const Header: React.FC = () => {
    return (
        <div
            className="flex bg-secondary-surface  ps-8 sm:ps-12 md:ps-16 justify-left items-center sm:gap-8 pb-6 sm:pb-8 border-b-4 sm:border-b-6 md:border-b-8 golden-border">
            <CorelaiLogo/>
        </div>
    );
};


export default Header;
