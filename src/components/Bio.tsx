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
        <section
            id="bio"
            ref={containerRef}
            className="relative py-24 md:py-32 px-5 md:px-6"
            style={{
                background: `
          linear-gradient(180deg,
            #FDFCF6 0%,
            #f5f5f8 15%,
            #e8eef8 30%,
            #d8e4f5 50%,
            #c8d8f0 70%,
            #b8d4f0 85%,
            #a8ccf0 100%
          )
        `,
            }}
        >
            <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="font-hand text-2xl md:text-3xl text-dark/50 mb-10 bio-line">Bio</h2>

                <div className="space-y-6 text-dark/90 text-lg md:text-xl font-serif leading-relaxed">
                    <p className="bio-line">
                        I'm a Product Manager helping high-growth startups turn ambitious ideas into products that actually ship.
                    </p>

                    <p className="bio-line">
                        My 4+ years of experience spans building scalable FinTech infrastructure at{" "}
                        <span className="text-dark font-semibold underline underline-offset-4 decoration-dark/25">NPCI</span>,
                        launching tokenized asset platforms at{" "}
                        <span className="text-dark font-semibold underline underline-offset-4 decoration-dark/25">Dira Foundation</span>,
                        and digitizing B2B workflows at{" "}
                        <span className="text-dark font-semibold underline underline-offset-4 decoration-dark/25">Pyramid Timber Associates</span>.
                    </p>

                    <p className="bio-line">
                        I previously led a cross-functional team that shipped a UPI cross-border payment routing system, and earlier helped build a 0-to-1 blockchain platform for real-world asset tokenization.
                    </p>

                    <p className="bio-line">
                        Outside of work, I spend my time exploring{" "}
                        <span className="text-dark font-semibold underline underline-offset-4 decoration-dark/25">AI research</span>,{" "}
                        <span className="text-dark font-semibold underline underline-offset-4 decoration-dark/25">event planning systems</span>, and occasionally convincing the leaning tower of Pisa to stand straight.
                    </p>
                </div>
            </div>
        </section>
    );
}
