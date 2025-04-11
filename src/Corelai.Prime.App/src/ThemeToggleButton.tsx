import { useState, useEffect } from 'react';
import { toggleTheme } from './toggleTheme';

export const ThemeToggleButton = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const current = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
        setTheme(current);
    }, []);

    const handleClick = () => {
        toggleTheme();
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button onClick={handleClick}>
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

