import {useTheme} from "../../hooks/useTheme.ts";
import React from "react";
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";

type Props = {
    className: string;
    moonClassName: string;
}

export const ThemeToggleButton: React.FC<Props> = ({className, moonClassName}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div onClick={toggleTheme} className={
            `cursor-pointer uppercase
            ${className}`
        }>
            {theme === 'dark' ?
                <WiMoonAltWaxingCrescent2 className={`${moonClassName}`}/>
                :
                <WiMoonAltWaxingCrescent2 className={`${moonClassName}`}/>
            }
        </div>
    );
};