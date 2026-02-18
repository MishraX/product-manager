import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        <section id="bio" ref={containerRef} className="bg-cream py-24 md:py-32 px-6">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-sm uppercase tracking-[0.3em] text-dark/40 font-sans mb-10 bio-line">Bio</h2>

                <div className="space-y-6 text-dark/75 text-base md:text-lg font-sans font-light leading-relaxed">
                    <p className="bio-line">
                        I'm a Product Manager helping high-growth startups turn ambitious ideas into products that actually ship.
                    </p>

                    <p className="bio-line">
                        My 4+ years of experience spans building scalable FinTech infrastructure at{" "}
                        <span className="text-dark font-normal underline underline-offset-4 decoration-dark/20">NPCI</span>,
                        launching tokenized asset platforms at{" "}
                        <span className="text-dark font-normal underline underline-offset-4 decoration-dark/20">Dira Foundation</span>,
                        and digitizing B2B workflows at{" "}
                        <span className="text-dark font-normal underline underline-offset-4 decoration-dark/20">Pyramid Timber Associates</span>.
                    </p>

                    <p className="bio-line">
                        I previously led a cross-functional team that shipped a UPI cross-border payment routing system, and earlier helped build a 0-to-1 blockchain platform for real-world asset tokenization.
                    </p>

                    <p className="bio-line">
                        Outside of work, I spend my time exploring{" "}
                        <span className="text-dark font-normal underline underline-offset-4 decoration-dark/20">AI research</span>,{" "}
                        <span className="text-dark font-normal underline underline-offset-4 decoration-dark/20">event planning systems</span>, and occasionally convincing the leaning tower of Pisa to stand straight.
                    </p>
                </div>
            </div>
        </section>
    );
}
