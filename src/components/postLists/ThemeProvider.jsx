import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored ? stored : 'dark';
    }); // base dark mode

    const toggleTheme = () => 
        setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme}}>{children}</ThemeContext.Provider>; //Can accesst this anywhere in application now
    
}
