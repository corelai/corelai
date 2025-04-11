import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const setThemeHtml = (theme:Theme) => {
    document.documentElement.setAttribute('data-theme', theme);
}

export const useTheme = () => {
    const [theme, setThemeState] = useState<Theme>('light');

    useEffect(() => {
        const localTheme = localStorage.getItem('theme') as Theme | null;

        // Use user's theme selection if present
        if (localTheme) {
            setThemeState(localTheme);
            setThemeHtml(localTheme ?? 'light');
            return;
        }

        // Use system's theme
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme: Theme = systemPrefersDark ? 'dark' : 'light';

        setThemeState(systemTheme);
        setThemeHtml(systemTheme);
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setThemeState(next);
        setThemeHtml(next);
        localStorage.setItem('theme', theme);
    };

    return { theme, toggleTheme };
};
