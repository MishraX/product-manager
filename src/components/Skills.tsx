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

    interface SkillColumn {
        title: string;
        items: string[];
        icon?: React.ReactNode;
    }

    const columns: SkillColumn[] = [
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
            className="section-bg-skills relative py-16 md:py-24 lg:py-32 px-5 md:px-6 z-10"
        >
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="font-hand text-2xl md:text-3xl text-dark/50 dark:text-indigo-200/60 mb-10 transition-colors duration-700">
                    Technical Toolkit
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {columns.map((col, i) => (
                        <div
                            key={i}
                            className="skill-col bg-white/40 dark:bg-black/20 backdrop-blur-sm border border-white/50 dark:border-white/10 rounded-xl p-5 md:p-6 transition-colors duration-700 shadow-sm hover:shadow-md dark:shadow-none"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {/* Assuming 'col' might have an icon property in a full implementation,
                                    for now, using the first letter of the title as a placeholder if no icon is provided. */}
                                <div className="w-10 h-10 rounded-lg bg-white/60 dark:bg-white/10 flex items-center justify-center text-dark/70 dark:text-indigo-300 transition-colors duration-700">
                                    {col.icon || col.title.charAt(0)}
                                </div>
                                <h3 className="font-serif font-bold text-lg md:text-xl text-dark dark:text-stone-100 transition-colors duration-700">
                                    {col.title}
                                </h3>
                            </div>
                            <ul className="space-y-2.5">
                                {col.items.map((skill, j) => (
                                    <li key={j} className="text-dark/80 dark:text-stone-300 font-sans text-sm md:text-base flex items-center gap-2 transition-colors duration-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-dark/20 dark:bg-indigo-400/50"></span>
                                        {skill}
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
