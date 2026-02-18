import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
    isLoaded: boolean;
}

export default function Hero({ isLoaded }: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        // Only run entrance animations AFTER loading screen is done
        if (!isLoaded || hasAnimated.current) return;
        hasAnimated.current = true;

        const tl = gsap.timeline();

        // Make sure elements start visible, then animate from hidden
        tl.fromTo(titleRef.current,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        )
            .fromTo(subtitleRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(scrollRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.6 },
                "-=0.2"
            );

        // Parallax on scroll
        if (titleRef.current) {
            gsap.to(titleRef.current, {
                yPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }
    }, [isLoaded]);

    const scrollToNext = () => {
        const nextSection = document.getElementById('bio');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden flex flex-col"
            style={{
                background: 'linear-gradient(180deg, #2563eb 0%, #3b82f6 25%, #60a5fa 50%, #93bbf5 70%, #c9ddf5 85%, #FDFCF6 100%)',
            }}
        >
            {/* Animated gradient layer rising from bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 z-[1] h-[25vh] md:h-[30vh]"
                style={{
                    background: 'linear-gradient(180deg, transparent 0%, #c9ddf5 30%, #93bbf5 60%, #60a5fa 100%)',
                    animation: 'riseGradient 2s ease-out forwards',
                    opacity: 0.5,
                }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 z-[2] h-[25vh] md:h-[30vh]"
                style={{
                    background: 'linear-gradient(0deg, #c9ddf5 0%, #93bbf5 40%, transparent 100%)',
                    animation: 'slowDrift 8s ease-in-out infinite',
                    opacity: 0.3,
                }}
            />

            {/* Top Bar */}
            <nav className="relative z-10 flex justify-between items-center px-5 py-4 md:px-12 md:py-6">
                <span className="text-white text-base md:text-lg font-serif tracking-wide drop-shadow-sm">Suraj Mishra</span>
                <a
                    href="mailto:mishraaa.suraj@gmail.com"
                    className="text-white/80 hover:text-white transition-colors drop-shadow-sm"
                    title="Email me"
                >
                    <Mail size={20} className="md:w-[22px] md:h-[22px]" />
                </a>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-6 text-center relative z-10">
                {/* Start hidden; GSAP animates to visible ONLY after loading screen exits */}
                <h1
                    ref={titleRef}
                    className="font-serif font-bold text-white tracking-tight"
                    style={{
                        fontSize: 'clamp(3.5rem, 14vw, 12rem)',
                        lineHeight: 0.9,
                        textShadow: '0 4px 30px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)',
                        opacity: 0,
                    }}
                >
                    Product<br />
                    <span className="italic">Manager</span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="mt-6 md:mt-8 max-w-lg md:max-w-xl text-white/90 text-sm md:text-lg font-sans font-light leading-relaxed px-2"
                    style={{
                        textShadow: '0 2px 12px rgba(0,0,0,0.2)',
                        opacity: 0,
                    }}
                >
                    Building products people love — while silently praying the API doesn't break.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollRef}
                className="relative z-10 flex flex-col items-center pb-8 md:pb-10 cursor-pointer"
                onClick={scrollToNext}
                style={{ opacity: 0 }}
            >
                <span
                    className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70 font-sans mb-2"
                    style={{ textShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
                >
                    Scroll
                </span>
                <ChevronDown size={18} className="text-white/70 bounce-arrow" />
            </div>
        </section>
    );
}
