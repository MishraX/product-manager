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
            bg: "bg-blue-50",
            border: "border-blue-100",
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
            bg: "bg-amber-50",
            border: "border-amber-100",
            items: [
                "Agile & Scrum Methodologies",
                "Backlog Prioritization",
                "PRD & User Story Writing",
                "User Research & Persona Building",
            ],
        },
        {
            title: "Technical Proficiency",
            bg: "bg-emerald-50",
            border: "border-emerald-100",
            items: [
                "API Design & Integration (REST)",
                "Cloud Infrastructure (AWS)",
                "Data Analytics (SQL, Python)",
                "System Architecture & Scalability",
            ],
        },
    ];

    return (
        <section ref={containerRef} className="bg-cream py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-sm uppercase tracking-[0.3em] text-dark/40 font-sans mb-12 text-center">
                    Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {columns.map((col, i) => (
                        <div
                            key={i}
                            className={`skill-col ${col.bg} ${col.border} border rounded-2xl p-8`}
                        >
                            <h3 className="text-lg font-serif font-semibold text-dark mb-6">
                                {col.title}
                            </h3>
                            <ul className="space-y-3">
                                {col.items.map((item, j) => (
                                    <li
                                        key={j}
                                        className="text-dark/70 font-sans text-sm leading-relaxed flex items-start gap-2"
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dark/30 flex-shrink-0"></span>
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
