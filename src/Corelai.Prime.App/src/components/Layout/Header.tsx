import React from 'react';
import {CorelaiLogo} from "./CorelaiLogo.tsx";

const Header: React.FC = () => {
    return (
        <div
            className="bg-primary-surface
             border-b-4 sm:border-b-6 md:border-b-8 golden-border">
            <CorelaiLogo/>

        </div>
    );
};


export default Header;
