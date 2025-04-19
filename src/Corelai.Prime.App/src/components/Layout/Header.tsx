import React from 'react';
import {CorelaiLogo} from "./CorelaiLogo.tsx";




const Header: React.FC = () => {
    return (
        <div
            className=" pt-16
             border-t-4 sm:border-t-6 md:border-t-8
             flex justify-center
             ">
            <CorelaiLogo/>
        </div>
    );
};


export default Header;
