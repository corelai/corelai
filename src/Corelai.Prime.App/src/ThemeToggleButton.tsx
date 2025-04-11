import { useTheme } from './useTheme';

export const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};