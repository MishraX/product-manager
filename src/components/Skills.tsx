import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-col", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const columns = [
        {
            title: "Core Competencies",
            items: [
                "0-to-1 Product Lifecycle",
                "Cross-Functional Leadership",
                "Data-Driven Decision Making",
                "Product Strategy & Roadmapping",
                "Stakeholder Management",
            ],
        },
        {
            title: "Product Execution",
            items: [
                "Agile & Scrum Methodologies",
                "Backlog Prioritization",
                "PRD & User Story Writing",
                "User Research & Persona Building",
            ],
        },
        {
            title: "Technical Proficiency",
            items: [
                "API Design & Integration (REST)",
                "Cloud Infrastructure (AWS)",
                "Data Analytics (SQL, Python)",
                "System Architecture & Scalability",
            ],
        },
    ];

    return (
        <section
            ref={containerRef}
            className="relative py-24 md:py-32 px-5 md:px-6"
            style={{
                background: `
          linear-gradient(180deg,
            #f5d5d0 0%,
            #f0d2d2 15%,
            #ebd0d8 30%,
            #e5cee0 45%,
            #e2cfe6 60%,
            #e0d2ec 80%,
            #e0d4f0 100%
          )
        `,
            }}
        >
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="font-hand text-2xl md:text-3xl text-dark/50 mb-12 text-center">
                    Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {columns.map((col, i) => (
                        <div
                            key={i}
                            className="skill-col bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl p-6 md:p-8"
                        >
                            <h3 className="text-lg font-serif font-semibold text-dark mb-6">
                                {col.title}
                            </h3>
                            <ul className="space-y-3">
                                {col.items.map((item, j) => (
                                    <li
                                        key={j}
                                        className="text-dark/65 font-sans text-sm leading-relaxed flex items-start gap-2"
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dark/25 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
