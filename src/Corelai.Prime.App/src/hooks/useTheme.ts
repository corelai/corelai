import {useEffect, useState} from 'react';
import {Option, none, some, fromNullable, match} from 'fp-ts/Option';
import {pipe} from 'fp-ts/function';

export type Theme = 'light' | 'dark';

const isValidTheme = (value: string): value is Theme =>
    value === 'light' || value === 'dark';

const getStoredTheme = (): Option<Theme> =>
    pipe(
        fromNullable(localStorage.getItem('theme')),
        match(
            () => none,
            (value) => (isValidTheme(value) ? some(value) : none)
        )
    );

const getSystemTheme = (): Theme =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const applyTheme = (theme: Theme): void => {
    document.documentElement.setAttribute('data-theme', theme);
};

const getNextTheme = (current: Theme): Theme =>
    current === 'dark' ? 'light' : 'dark';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const resolved: Theme = pipe(
            getStoredTheme(),
            match(
                () => getSystemTheme(),
                theme => theme
            )
        );
        applyTheme(resolved);
        setTheme(resolved);
    }, []);

    const toggleTheme = () => {
        const next = getNextTheme(theme);
        localStorage.setItem('theme', next);
        applyTheme(next);
        setTheme(next);
    };

    return {theme, toggleTheme};
};