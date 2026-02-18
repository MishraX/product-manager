import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, FileText, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* HBS Shield SVG — simplified official Harvard shield */
const HBSShield = ({ className }: { className?: string }) => (
    <svg className={className} width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0L0 6V20C0 30 16 38 16 38C16 38 32 30 32 20V6L16 0Z" fill="#A51C30" />
        <text x="16" y="24" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="serif">H</text>
    </svg>
);

export default function Experience() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".exp-reveal", {
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const workHistory = [
        {
            company: "Pyramid Timber Associates",
            role: "Technical Product Manager",
            period: "April 2025 – Present",
        },
        {
            company: "Dira Foundation",
            role: "Lead Strategist & Founding Engineer",
            period: "June 2023 – November 2025",
        },
        {
            company: "Confidential (NPCI Ecosystem)",
            role: "Technical Product Engineer",
            period: "May 2022 – July 2024",
        },
    ];

    const projects = [
        {
            name: "Akari Planner",
            role: "AI-Assisted Event Planning",
            period: "June 2025",
        },
        {
            name: "Emotional AI Research",
            role: "Mathematical Modeling of Emotions",
            period: "February 2025",
        },
        {
            name: "NeuroLearn AI",
            role: "Adaptive Learning System",
            period: "January 2023 – April 2024",
        },
    ];

    const education = {
        institution: "Harvard Business School Online",
        degree: "Associate-level Business Program (Sponsored)",
        gpa: "A+",
        period: "February 2024 – April 2026",
    };

    return (
        <section ref={containerRef} className="bg-warm-gray py-16 md:py-24 lg:py-32 px-5 md:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                {/* Left: Profile Card */}
                <div className="lg:col-span-4 exp-reveal">
                    <div className="bg-cream rounded-2xl p-6 shadow-sm border border-stone-200/60 sticky top-8">
                        {/* Profile Photo */}
                        <div className="aspect-square md:aspect-[3/4] rounded-xl overflow-hidden mb-5 bg-stone-200">
                            <img
                                src="/profile.png"
                                alt="Suraj Mishra"
                                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    if (target.parentElement) {
                                        target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-stone-400 text-sm font-sans">Add profile.png to /public</div>';
                                    }
                                }}
                            />
                        </div>

                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-dark">Suraj Mishra</h3>
                        <p className="text-stone-500 text-sm font-sans mt-1">Product Manager</p>
                        <p className="text-stone-400 text-xs font-sans mt-0.5">Mysore, Karnataka</p>

                        {/* Buttons */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href="/resume.pdf"
                                onClick={(e) => {
                                    const isMobile = /Android|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) || window.innerWidth < 768;
                                    if (isMobile) {
                                        e.preventDefault();
                                        window.open('/resume.pdf', '_blank');
                                    }
                                }}
                                download="Suraj_Mishra_Resume.pdf"
                                className="flex-1 flex items-center justify-center gap-2 bg-dark/90 text-cream py-3 px-4 rounded-full text-sm font-sans font-medium hover:bg-dark transition-colors"
                            >
                                Résumé <FileText size={14} />
                            </a>
                            <a
                                href="https://linkedin.com/in/mishrax27"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 border border-stone-300 py-3 px-4 rounded-full text-sm font-sans font-medium hover:bg-stone-100 transition-colors text-dark"
                            >
                                LinkedIn <Linkedin size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Resume Details */}
                <div className="lg:col-span-8 space-y-12">

                    {/* Work Section */}
                    <div className="exp-reveal">
                        <h3 className="text-sm uppercase tracking-[0.3em] text-dark/40 font-sans mb-8">Work Experience</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                            {workHistory.map((item, i) => (
                                <div key={i} className="exp-reveal group">
                                    <h4 className="text-base md:text-lg font-serif font-bold text-dark">{item.company}</h4>
                                    <p className="text-dark/70 font-sans text-sm mt-1">{item.role}</p>
                                    <p className="text-stone-400 font-sans text-xs mt-1">{item.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education — subtle separate box */}
                    <div className="exp-reveal">
                        <h3 className="text-sm uppercase tracking-[0.3em] text-dark/40 font-sans mb-6">Education</h3>
                        <div className="bg-warm-gray border border-stone-200/50 rounded-xl p-5 md:p-6">
                            <div className="flex items-start gap-4">
                                <HBSShield className="flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-base md:text-lg font-serif font-bold text-dark">{education.institution}</h4>
                                    <p className="text-dark/70 font-sans text-sm mt-1">{education.degree}</p>
                                    <p className="text-stone-400 font-sans text-xs mt-1">{education.period} · GPA: {education.gpa}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="exp-reveal">
                        <h3 className="text-sm uppercase tracking-[0.3em] text-dark/40 font-sans mb-8">Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {projects.map((item, i) => (
                                <div key={i} className="exp-reveal group cursor-pointer">
                                    <h4 className="text-lg font-serif font-bold text-dark group-hover:text-soft-blue transition-colors flex items-center gap-2">
                                        {item.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h4>
                                    <p className="text-dark/70 font-sans text-sm mt-1">{item.role}</p>
                                    <p className="text-stone-400 font-sans text-xs mt-1">{item.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
