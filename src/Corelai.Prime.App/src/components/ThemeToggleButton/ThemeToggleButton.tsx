import {useTheme} from "../../hooks/useTheme.ts";
import React from "react";
import {
    WiMoonAltWaningCrescent5,
    WiMoonAltWaxingCrescent3
} from "react-icons/wi";

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
                <WiMoonAltWaxingCrescent3 className={`${moonClassName}`}/>
                :
                <WiMoonAltWaningCrescent5 className={`${moonClassName}`}/>
            }
        </div>
    );
};