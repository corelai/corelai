import {useTheme} from "../../hooks/useTheme.ts";
import React from "react";
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";
import {CiLight} from "react-icons/ci";

type Props = {
    className: string;
    iconClassName: string;
}

export const ThemeToggleButton: React.FC<Props> = ({className, iconClassName}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div onClick={toggleTheme} className={
            `cursor-pointer
            ${className}`
        }>
            {theme === 'dark' ?
                <CiLight className={`${iconClassName}`}/>
                :
                <WiMoonAltWaxingCrescent2 className={`${iconClassName}`}/>
            }
        </div>
    );
};