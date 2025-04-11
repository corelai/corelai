import { useEffect } from 'react';

export const ThemeProvider = () => {
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        const html = document.documentElement;

        const nextTheme = theme === 'dark' ? 'dark' : 'light';
        html.setAttribute('data-theme', nextTheme);
    }, []);

    return null; // Component no-UI
};