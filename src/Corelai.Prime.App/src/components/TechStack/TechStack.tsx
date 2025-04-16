import React from "react";
import {FaGithub} from "react-icons/fa";
import reactLogo from "/images/react.svg";
import tailwindLogo from "/images/tailwindcss-mark.svg";

export const TechStack: React.FC = () => {
    return (<section
        className="text-xs bg-neutral-950 text-division flex items-center justify-end gap-2 align-middle p-2 py-4 ">

        <a href="https://github.com/corelai" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-4 h-4 sm:w-6 sm:h-6 hover:text-secondary transition-colors"/>
        </a>
        <div>Powered by</div>
        <div className="h-4 w-4 sm:w-6 sm:h-6">
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} alt="React"/>
            </a>
        </div>
        <div>&</div>
        <div className="h-4 w-4 sm:w-6 sm:h-6 pt-1">
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                <img src={tailwindLogo} alt="Tailwind" className="h-4"/>
            </a>
        </div>
    </section>);
}