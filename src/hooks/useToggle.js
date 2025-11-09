import { useState } from 'react';

export function useToggle(initial = false) {
    const [value, setValue] = useState(initial);
    const toggle = () => setValue(v => !v); //Set false to true, or true to false
    return [value, toggle];
}