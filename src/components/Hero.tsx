import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ChevronDown } from 'lucide-react';

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

        // Product: falling and rotating from top
        tl.fromTo(".hero-char-p",
            { y: -120, opacity: 0, rotationZ: 45, scale: 1.2 },
            { y: 0, opacity: 1, rotationZ: 0, scale: 1, duration: 1, stagger: 0.06, ease: "back.out(1.5)" }
        )
            // Manager: zapping from right
            .fromTo(".hero-char-m",
                { x: 150, opacity: 0, scaleX: 1.5 },
                { x: 0, opacity: 1, scaleX: 1, duration: 0.8, stagger: 0.04, ease: "expo.out" },
                "-=0.6"
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
            className="relative min-h-screen w-full overflow-hidden flex flex-col"
            style={{
                background: `
          linear-gradient(180deg,
            #8B7355 0%,
            #a08868 15%,
            #bda482 30%,
            #d4c4a0 45%,
            #e8dcc4 60%,
            #f2ece0 75%,
            #f8f5ee 88%,
            #FDFCF6 100%
          )
        `,
                backgroundSize: '100% 100%',
            }}
        >
            {/* Top Bar */}
            <nav className="relative z-10 flex justify-between items-center px-5 py-4 md:px-12 md:py-6">
                <span className="text-white text-base md:text-lg font-serif tracking-wide drop-shadow-md">Suraj Mishra</span>
                <a
                    href="mailto:mishraaa.suraj@gmail.com"
                    className="text-white/80 hover:text-white transition-colors drop-shadow-md"
                    title="Email me"
                >
                    <Mail size={20} className="md:w-[22px] md:h-[22px]" />
                </a>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-6 text-center relative z-10">
                <h1
                    ref={titleRef}
                    className="font-serif font-bold tracking-tight pb-4"
                    style={{
                        fontSize: 'clamp(3.5rem, 14vw, 12rem)',
                        lineHeight: 0.9,
                        color: '#f5f0e8',
                        textShadow: '0 4px 30px rgba(60,40,20,0.4), 0 1px 3px rgba(60,40,20,0.2)'
                    }}
                >
                    <span className="block pb-2">
                        {"Product".split('').map((char, i) => (
                            <span key={`p-${i}`} className="inline-block hero-char-p">{char}</span>
                        ))}
                    </span>
                    <span className="italic block mt-2 md:mt-0">
                        {"Manager".split('').map((char, i) => (
                            <span key={`m-${i}`} className="inline-block hero-char-m">{char}</span>
                        ))}
                    </span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="mt-6 md:mt-8 max-w-lg md:max-w-xl text-sm md:text-lg font-sans font-light leading-relaxed px-2"
                    style={{
                        color: '#4a3d2e',
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
                    className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans mb-2"
                    style={{ color: '#6b5d4a' }}
                >
                    Scroll
                </span>
                <ChevronDown size={18} style={{ color: '#7a6b58' }} className="bounce-arrow" />
            </div>
        </section>
    );
}
