import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatCounter from "./StatCounter";

gsap.registerPlugin(ScrollTrigger);

export default function Bio() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".bio-line", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="bio"
            ref={containerRef}
            className="section-bg-bio relative py-20 px-5 md:px-6"
        >
            <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="font-hand text-3xl md:text-4xl text-dark/60 dark:text-indigo-200/60 mb-8 md:mb-12 transition-colors duration-700">
                    Behind the Résumé
                </h2>

                <div className="space-y-6 md:space-y-8 text-lg md:text-xl font-serif text-dark/90 dark:text-stone-200 leading-relaxed transition-colors duration-700">
                    <p className="bio-line">
                        I'm a Product Manager helping high-growth startups turn ambitious ideas into products that actually ship. I've spent the last few years orchestrating scalable FinTech infrastructure and launching tokenized asset platforms.
                    </p>

                    <p className="bio-line">
                        Outside of writing PRDs and gently negotiating scope creep with engineers, you'll usually find me trekking up random mountains, exploring obscure beaches, attempting to cook without burning the kitchen down, or pretending I'm a professional photographer.
                    </p>
                </div>

                {/* Animated Stat Counters */}
                <div className="bio-line mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 border-t border-dark/10 dark:border-white/10 pt-10 transition-colors duration-700">
                    <StatCounter value={4} suffix="+" label="Years Experience" />
                    <StatCounter value={3} label="Companies" />
                    <StatCounter value={3} label="Live Projects" />
                </div>
            </div>
        </section>
    );
}
