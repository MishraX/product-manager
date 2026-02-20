import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
    isLoaded: boolean;
}

/*
  COLOR FLOW MAP:
  Hero:       #8B7355 (brown beige) → #FDFCF6 (cream)
  Bio:        #FDFCF6 (cream)       → #dce8f5 (light blue)
  Experience: #dce8f5 (light blue)  → #f5d5d0 (rose/strawberry)
  Skills:     #f5d5d0 (rose)        → #e0d4f0 (lavender)
  Checklist:  #e0d4f0 (lavender)    → #d4c8e8 (lilac)
  Footer:     #0a0a0a (black)
*/

export default function Hero({ isLoaded }: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isLoaded || hasAnimated.current) return;
        hasAnimated.current = true;

        const tl = gsap.timeline();

        // Product & Manager: premium editorial blur reveal
        tl.fromTo(".hero-word",
            { y: 60, opacity: 0, filter: "blur(12px)", scale: 0.95 },
            { y: 0, opacity: 1, filter: "blur(0px)", scale: 1, duration: 1.5, stagger: 0.2, ease: "power3.out" }
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
            className="section-bg-hero min-h-screen w-full overflow-hidden flex flex-col"
        >
            <nav className="relative z-10 flex justify-between items-center px-5 py-4 md:px-12 md:py-6">
                <span className="text-white dark:text-stone-200 text-base md:text-lg font-serif tracking-wide drop-shadow-md transition-colors duration-700">Suraj Mishra</span>
                <div className="flex items-center gap-5 md:gap-7">
                    <ThemeToggle />
                    <a
                        href="mailto:mishraaa.suraj@gmail.com"
                        className="text-white/80 dark:text-stone-300 hover:text-white dark:hover:text-white transition-colors drop-shadow-md"
                        title="Email me"
                    >
                        <Mail size={20} className="md:w-[22px] md:h-[22px]" />
                    </a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-6 text-center relative z-10">
                <h1
                    ref={titleRef}
                    className="font-serif font-bold tracking-tight pb-4 text-[#f5f0e8] dark:text-white transition-all duration-700 [text-shadow:0_4px_30px_rgba(60,40,20,0.4)] dark:[text-shadow:0_0_60px_rgba(200,220,255,0.4),0_0_20px_rgba(100,150,255,0.4)]"
                    style={{
                        fontSize: 'clamp(3.5rem, 14vw, 12rem)',
                        lineHeight: 0.9,
                    }}
                >
                    <span className="block pb-2 hero-word">
                        Product
                    </span>
                    <span className="italic block mt-2 md:mt-0 hero-word">
                        Manager
                    </span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="mt-6 md:mt-8 max-w-lg md:max-w-xl text-sm md:text-lg font-sans font-light leading-relaxed px-2 text-[#4a3d2e] dark:text-stone-300 transition-colors duration-700"
                    style={{ opacity: 0 }}
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
                    className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans mb-2 text-[#6b5d4a] dark:text-stone-400 transition-colors duration-700"
                >
                    Scroll
                </span>
                <ChevronDown size={18} className="bounce-arrow text-[#7a6b58] dark:text-stone-400 transition-colors duration-700" />
            </div>
        </section>
    );
}
