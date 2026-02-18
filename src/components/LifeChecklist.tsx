import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── SVG Doodles ─── */
const PaperPlane = ({ className }: { className?: string }) => (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 42L44 24L6 6V20L32 24L6 28V42Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
    </svg>
);

const Camera = ({ className }: { className?: string }) => (
    <svg className={className} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="22" cy="25" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 12L18 6H26L28 12" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

const CurvedArrow = ({ className }: { className?: string }) => (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 50C10 50 15 10 50 15" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" fill="none" />
        <path d="M44 8L50 15L43 20" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

const Star = ({ className }: { className?: string }) => (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14 9H21L15 14L17 21L12 17L7 21L9 14L3 9H10L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
    </svg>
);

const DottedLine = ({ className }: { className?: string }) => (
    <svg className={className} width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="120" y2="2" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
    </svg>
);

const Squiggle = ({ className }: { className?: string }) => (
    <svg className={className} width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10C10 0 20 20 30 10C40 0 50 20 60 10C70 0 80 20 80 10" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

const Compass = ({ className }: { className?: string }) => (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2" fill="none" />
        <polygon points="20,6 23,18 20,34 17,18" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
        <line x1="20" y1="3" x2="20" y2="6" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="34" x2="20" y2="37" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="20" x2="6" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="34" y1="20" x2="37" y2="20" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const Ticket = ({ className }: { className?: string }) => (
    <svg className={className} width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H52V12C48 12 48 20 52 20V28H4V20C8 20 8 12 4 12V4Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="20" y1="4" x2="20" y2="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
);

const Mountain = ({ className }: { className?: string }) => (
    <svg className={className} width="64" height="36" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 34L18 6L28 20L36 10L62 34H2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
        <circle cx="50" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
);

const Spiral = ({ className }: { className?: string }) => (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 18C18 15 20 13 23 13C26 13 28 15 28 18C28 23 24 27 18 27C11 27 6 22 6 15C6 7 12 2 20 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
);

const Globe = ({ className }: { className?: string }) => (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
        <ellipse cx="20" cy="20" rx="8" ry="16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4" y1="26" x2="36" y2="26" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const Heart = ({ className }: { className?: string }) => (
    <svg className={className} width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 24L3 13C1 10 1 6 4 4C7 2 10 3 12 5L14 8L16 5C18 3 21 2 24 4C27 6 27 10 25 13L14 24Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
    </svg>
);

export default function LifeChecklist() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".checklist-item", {
                x: -30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });
            gsap.from(".doodle", {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const completed = [
        "Multiple Full Scholarship Offers",
        "Harvard Business School Online (A+)",
        "Built 0-1 Products",
        "Rejected Conventional Path",
    ];

    const travelGoals = [
        "Mt Fuji and Tokyo shrine in cherry blossom season",
        "Try New York bagels",
        "Make leaning tower of Pisa straight",
        "Experience Sky Lantern festival in Thailand",
        "See snowfall in Kashmir",
    ];

    return (
        <section
            ref={containerRef}
            className="relative py-16 md:py-24 lg:py-32 px-5 md:px-6 overflow-hidden"
            style={{
                background: `
          linear-gradient(180deg,
            #e0d4f0 0%,
            #ddd0ed 20%,
            #dacce8 40%,
            #d8c9e5 60%,
            #d6c8e4 80%,
            #d4c8e8 100%
          )
        `,
            }}
        >
            {/* Scattered Doodles — more visible on pastel backgrounds */}
            <PaperPlane className="doodle doodle-float absolute top-12 right-8 md:right-16 text-purple-800/35 rotate-12 scale-75 md:scale-100" />
            <Star className="doodle doodle-float-delay absolute top-16 left-[35%] text-purple-700/40 scale-110" />
            <Compass className="doodle doodle-float absolute top-8 left-[55%] md:left-[60%] text-purple-800/25 rotate-12" />
            <DottedLine className="doodle absolute top-24 left-4 md:left-12 text-purple-700/25 rotate-6" />

            <CurvedArrow className="doodle doodle-float-delay-2 absolute top-[28%] left-4 md:left-10 text-purple-800/30 scale-75 md:scale-100" />
            <Heart className="doodle doodle-float absolute top-[35%] left-[12%] text-pink-600/35 scale-110" />
            <Globe className="doodle doodle-float-delay absolute top-[50%] left-6 md:left-16 text-purple-700/25" />
            <Spiral className="doodle doodle-float-delay-2 absolute top-[65%] left-[8%] text-purple-800/30" />

            <Mountain className="doodle doodle-float-delay absolute top-[25%] right-4 md:right-12 text-purple-700/25 -rotate-3" />
            <Squiggle className="doodle doodle-float absolute top-[42%] right-6 md:right-16 text-purple-800/35 rotate-6" />
            <Ticket className="doodle doodle-float-delay-2 absolute top-[55%] right-[8%] text-purple-700/25 rotate-3" />
            <Star className="doodle doodle-float absolute top-[68%] right-[15%] text-pink-600/35 scale-125" />

            <Camera className="doodle doodle-float-delay absolute bottom-16 right-[20%] text-purple-800/30 -rotate-6" />
            <DottedLine className="doodle absolute bottom-[18%] left-4 md:left-14 text-purple-700/25 -rotate-12" />
            <PaperPlane className="doodle doodle-float-delay-2 absolute bottom-10 left-[50%] text-purple-800/30 scale-75 -rotate-12" />
            <Star className="doodle doodle-float absolute bottom-28 left-[25%] text-pink-600/30 scale-90" />
            <DottedLine className="doodle absolute bottom-8 right-8 text-purple-700/25 rotate-30" />
            <Squiggle className="doodle doodle-float-delay absolute bottom-[30%] right-[5%] text-purple-800/25 -rotate-6" />

            <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="font-hand text-2xl md:text-3xl text-dark/50 mb-4">
                    Life Checklist
                </h2>
                <p className="text-dark/40 text-sm font-sans mb-12 leading-relaxed">
                    Things I've done, and things I still dream about. Completed items are crossed off — the rest are in progress.
                </p>

                {/* Completed Items */}
                <div className="space-y-4 mb-12">
                    {completed.map((item, i) => (
                        <div key={i} className="checklist-item flex items-center gap-4 py-3 border-b border-purple-900/15">
                            <div className="w-5 h-5 rounded-full border-2 border-purple-400/50 flex items-center justify-center flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-purple-400/60"></div>
                            </div>
                            <span className="text-dark/60 font-sans text-sm md:text-base line-through decoration-purple-500/50">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Travel / Future Goals */}
                <div className="space-y-4">
                    {travelGoals.map((item, i) => (
                        <div key={i} className="checklist-item flex items-center gap-4 py-3 border-b border-purple-900/10">
                            <div className="w-5 h-5 rounded-full border-2 border-purple-500/30 flex-shrink-0"></div>
                            <span className="text-dark/90 font-sans text-sm md:text-base font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
