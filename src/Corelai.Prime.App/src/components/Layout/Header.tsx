import React from 'react';
import {CorelaiLogo} from "./CorelaiLogo.tsx";

const Header: React.FC = () => {
    return (
        <div
            className="bg-primary-surface
             border-t-4 sm:border-t-6 md:border-t-8 golden-border
             flex justify-center
             ">
            <CorelaiLogo/>
        </div>
    );
};


export default Header;
