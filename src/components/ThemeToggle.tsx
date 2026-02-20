import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial state
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-[60px] h-8 flex items-center bg-transparent rounded-full p-1 cursor-pointer transition-colors duration-500 overflow-hidden group shadow-inner border border-stone-300 dark:border-indigo-800/50 outline-none"
            aria-label="Toggle Dark Mode"
        >
            {/* Backgrounds */}
            <div className={`absolute inset-0 bg-gradient-to-r from-sky-300 to-sky-100 transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`absolute inset-0 bg-gradient-to-tr from-[#140880] to-[#250B54] transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`} />

            {/* Stars background for dark mode */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-1 left-[32%] w-0.5 h-0.5 bg-white rounded-full animate-pulse shadow-[0_0_2px_white]" />
                <div className="absolute top-5 left-[45%] w-1 h-1 bg-indigo-200 rounded-full animate-pulse shadow-[0_0_3px_#c7d2fe]" style={{ animationDelay: '200ms' }} />
                <div className="absolute top-2 left-[55%] w-0.5 h-0.5 bg-white rounded-full animate-pulse shadow-[0_0_2px_white]" style={{ animationDelay: '400ms' }} />
            </div>

            {/* The sliding toggle thumb */}
            <div className={`absolute w-6 h-6 rounded-full shadow-sm transform transition-all duration-500 flex items-center justify-center z-10 ${isDark ? 'translate-x-[28px] bg-indigo-950 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.1)]' : 'translate-x-0 bg-amber-400'}`}>
                {/* Sun icon inside thumb */}
                <Sun className={`absolute w-4 h-4 text-white transition-all duration-500 ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100 group-hover:rotate-45'}`} strokeWidth={2.5} />

                {/* Moon icon inside thumb */}
                <Moon className={`absolute w-3.5 h-3.5 text-indigo-300 drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all duration-500 ${isDark ? 'opacity-100 -rotate-12 scale-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(165,180,252,1)]' : 'opacity-0 rotate-90 scale-50'}`} fill="currentColor" strokeWidth={0} />
            </div>
        </button>
    );
}
