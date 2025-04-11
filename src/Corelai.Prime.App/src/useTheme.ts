import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const html = document.documentElement;
        const localTheme = localStorage.getItem('theme') as Theme | null;

        // Se utente ha scelto un tema lo rispetto
        if (localTheme) {
            setTheme(localTheme);
            html.setAttribute('data-theme', localTheme);
            return;
        }

        // Altrimenti uso quello di sistema
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme: Theme = systemPrefersDark ? 'dark' : 'light';

        setTheme(systemTheme);
        html.setAttribute('data-theme', systemTheme);
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    };

    return { theme, toggleTheme };
};
