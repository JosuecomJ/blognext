'use strict';

import { useTheme } from "next-themes"
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function ThemeToggler() {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {
                theme === 'dark' ? <MdDarkMode size={30} /> : <BsSunFill size={30} />
            }
        </button>
    )
}