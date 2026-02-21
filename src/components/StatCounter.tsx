import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    decimals?: number;
}

/**
 * Animated stat counter that ticks up from 0 when scrolled into view.
 * Uses GSAP for smooth animation synced with ScrollTrigger.
 */
export default function StatCounter({ value, suffix = '', prefix = '', label, decimals = 0 }: StatCounterProps) {
    const numRef = useRef<HTMLSpanElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obj = { val: 0 };

        const anim = gsap.to(obj, {
            val: value,
            duration: 2,
            ease: 'power3.out',
            paused: true,
            onUpdate: () => {
                if (numRef.current) {
                    numRef.current.textContent = obj.val.toFixed(decimals);
                }
            },
        });

        const trigger = ScrollTrigger.create({
            trigger: wrapRef.current,
            start: 'top 80%',
            once: true,
            onEnter: () => anim.play(),
        });

        return () => {
            anim.kill();
            trigger.kill();
        };
    }, [value, decimals]);

    return (
        <div ref={wrapRef} className="flex flex-col items-center text-center">
            <span className="font-serif font-bold text-3xl md:text-4xl text-dark dark:text-stone-100 tabular-nums transition-colors duration-700">
                {prefix}<span ref={numRef}>0</span>{suffix}
            </span>
            <span className="mt-1 text-xs md:text-sm font-sans uppercase tracking-widest text-dark/40 dark:text-indigo-200/50 transition-colors duration-700">
                {label}
            </span>
        </div>
    );
}
