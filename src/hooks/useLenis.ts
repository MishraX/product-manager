import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes Lenis smooth scroll and syncs it with GSAP ScrollTrigger.
 * Works on both desktop and mobile (touch).
 */
export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,          // smoothness — lower = smoother
            duration: 1.2,       // animation duration
            touchMultiplier: 2,  // makes touch feel as responsive as desktop
            infinite: false,
        });

        // Sync GSAP ScrollTrigger with Lenis
        lenis.on('scroll', ScrollTrigger.update);

        // Feed Lenis into GSAP ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);
}
