import {useTheme} from "../../hooks/useTheme.ts";
import React from "react";

type Props = {
    className?: string;
}

export const ThemeToggleButton: React.FC<Props> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div onClick={toggleTheme} className={
            `cursor-pointer uppercase
            ${className}`
        }>
            {theme === 'dark' ? 'dark' : 'light️'}
        </div>
    );
};