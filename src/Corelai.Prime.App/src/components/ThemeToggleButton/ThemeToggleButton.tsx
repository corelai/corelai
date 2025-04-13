import {useTheme} from "../../hooks/useTheme.ts";
import React from "react";

export const ThemeToggleButton: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
            <button
                onClick={toggleTheme}
                className="cursor-pointer p-4"
            >
                {theme === 'dark' ? '🌙' : '☀️'}
            </button>
    );
};