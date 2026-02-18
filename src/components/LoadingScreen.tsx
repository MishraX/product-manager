import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [animateInk, setAnimateInk] = useState(false);

    useEffect(() => {
        // Start ink fill after a brief delay
        const timer = setTimeout(() => {
            setAnimateInk(true);
        }, 200);

        // Ink fill animation: 1.5s (starts at 200ms, finishes at ~1.7s)
        // Brief pause to read the full name: 0.5s
        // Then slide up exit: 0.8s
        // Total: ~3s from page load
        const exitTimer = setTimeout(() => {
            if (containerRef.current) {
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power3.inOut",
                    onComplete: () => {
                        onComplete();
                    }
                });
            }
        }, 2200);

        return () => {
            clearTimeout(timer);
            clearTimeout(exitTimer);
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
        >
            <h1
                ref={textRef}
                className={`font-hand text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic ink-fill-text select-none ${animateInk ? 'animate' : ''}`}
            >
                Suraj Mishra
            </h1>
        </div>
    );
}
