import {useTheme} from "../../hooks/useTheme.ts";

export const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="
            cursor-pointer
            p-2
            "
        >
            {theme === 'dark' ? '🌙' : '☀️'}
        </button>
    );
};