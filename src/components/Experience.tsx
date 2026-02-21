import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, FileText, Linkedin } from "lucide-react";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

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
        <section
            ref={containerRef}
            className="section-bg-exp relative py-16 md:py-24 lg:py-32 px-5 md:px-6"
        >
            {/* SVG Distortion Filter — hidden but applied to image */}
            <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
                <defs>
                    <filter id="photo-distort">
                        <feTurbulence
                            id="turbulence"
                            type="turbulence"
                            baseFrequency="0 0"
                            numOctaves="2"
                            seed="2"
                            result="turbulence"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="turbulence"
                            scale="0"
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="displaced"
                        />
                    </filter>
                </defs>
            </svg>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">

                {/* Left: Profile Card */}
                <div className="lg:col-span-4 exp-reveal">
                    <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/60 dark:border-white/10 sticky top-8 transition-colors duration-700">
                        {/* Profile Photo with distortion on hover */}
                        <div
                            className="aspect-square md:aspect-[3/4] rounded-xl overflow-hidden mb-5 bg-stone-200 group cursor-pointer"
                            onMouseEnter={() => {
                                if (window.matchMedia('(hover: none)').matches) return;
                                const turbulence = document.getElementById('turbulence') as SVGFETurbulenceElement | null;
                                if (!turbulence) return;
                                gsap.to({ val: 0 }, {
                                    val: 1,
                                    duration: 0.4,
                                    ease: 'power2.in',
                                    onUpdate: function () {
                                        turbulence.setAttribute('baseFrequency', `${this.targets()[0].val * 0.02} ${this.targets()[0].val * 0.01}`);
                                    }
                                });
                                const dispMap = document.querySelector('#photo-distort feDisplacementMap') as SVGFEDisplacementMapElement | null;
                                if (dispMap) gsap.to(dispMap, { attr: { scale: 22 }, duration: 0.4, ease: 'power2.in' });
                            }}
                            onMouseLeave={() => {
                                const turbulence = document.getElementById('turbulence') as SVGFETurbulenceElement | null;
                                const dispMap = document.querySelector('#photo-distort feDisplacementMap') as SVGFEDisplacementMapElement | null;
                                if (turbulence) gsap.to({ val: 1 }, {
                                    val: 0,
                                    duration: 0.6,
                                    ease: 'power2.out',
                                    onUpdate: function () {
                                        turbulence.setAttribute('baseFrequency', `${this.targets()[0].val * 0.02} ${this.targets()[0].val * 0.01}`);
                                    }
                                });
                                if (dispMap) gsap.to(dispMap, { attr: { scale: 0 }, duration: 0.6, ease: 'power2.out' });
                            }}
                        >
                            <img
                                src="/profile.png"
                                alt="Suraj Mishra"
                                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                                style={{ filter: 'url(#photo-distort)' }}
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    if (target.parentElement) {
                                        target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-stone-400 text-sm font-sans">Add profile.png to /public</div>';
                                    }
                                }}
                            />
                        </div>

                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-dark dark:text-stone-100 transition-colors duration-700">Suraj Mishra</h3>
                        <p className="text-stone-500 dark:text-indigo-200/70 text-sm font-sans mt-1 transition-colors duration-700">Product Manager</p>
                        <p className="text-stone-400 dark:text-stone-400 text-xs font-sans mt-0.5 transition-colors duration-700">Mysore, Karnataka</p>

                        {/* Magnetic Buttons */}
                        <div className="flex gap-3 mt-6">
                            <MagneticButton
                                as="a"
                                href="/resume.pdf"
                                download="Suraj_Mishra_Resume.pdf"
                                onClick={(e: React.MouseEvent) => {
                                    const isMobile = /Android|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) || window.innerWidth < 768;
                                    if (isMobile) {
                                        e.preventDefault();
                                        window.open('/resume.pdf', '_blank');
                                    }
                                }}
                                className="flex-1 flex items-center justify-center gap-2 bg-dark/90 text-cream py-3 px-4 rounded-full text-sm font-sans font-medium hover:bg-dark transition-colors"
                                strength={0.4}
                            >
                                <span className="hidden md:inline">Résumé</span> <FileText size={14} />
                            </MagneticButton>
                            <MagneticButton
                                as="a"
                                href="https://linkedin.com/in/mishrax27"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 border border-stone-300/60 dark:border-white/10 bg-white/30 dark:bg-white/5 py-3 px-4 rounded-full text-sm font-sans font-medium hover:bg-white/50 dark:hover:bg-white/10 transition-colors text-dark dark:text-stone-200"
                                strength={0.4}
                            >
                                <span className="hidden md:inline">LinkedIn</span> <Linkedin size={14} />
                            </MagneticButton>
                        </div>
                    </div>
                </div>

                {/* Right: Resume Details */}
                <div className="lg:col-span-8 space-y-12">

                    {/* Work Section */}
                    <div className="exp-reveal">
                        <h3 className="font-hand text-2xl md:text-3xl text-dark/50 dark:text-indigo-200/60 mb-8 transition-colors duration-700">Work Experience</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                            {workHistory.map((item, i) => (
                                <div key={i} className="exp-reveal group">
                                    <h4 className="text-base md:text-lg font-serif font-bold text-dark dark:text-stone-100 transition-colors duration-700">{item.company}</h4>
                                    <p className="text-dark/70 dark:text-stone-300 font-sans text-sm mt-1 transition-colors duration-700">{item.role}</p>
                                    <p className="text-stone-400 dark:text-stone-500 font-sans text-xs mt-1 transition-colors duration-700">{item.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="exp-reveal">
                        <h3 className="font-hand text-2xl md:text-3xl text-dark/50 dark:text-indigo-200/60 mb-6 transition-colors duration-700">Education</h3>
                        <div className="bg-white/40 dark:bg-black/20 backdrop-blur-sm border border-white/50 dark:border-white/10 rounded-xl p-5 md:p-6 transition-colors duration-700">
                            <div className="flex items-start gap-4">
                                <img src="/Harvard-logo.png" alt="Harvard" className="flex-shrink-0 mt-0.5 w-8 md:w-10 h-auto object-contain" />
                                <div>
                                    <h4 className="text-base md:text-lg font-serif font-bold text-dark dark:text-stone-100 transition-colors duration-700">{education.institution}</h4>
                                    <p className="text-dark/70 dark:text-stone-300 font-sans text-sm mt-1 transition-colors duration-700">{education.degree}</p>
                                    <p className="text-stone-400 dark:text-stone-500 font-sans text-xs mt-1 transition-colors duration-700">{education.period} · GPA: {education.gpa}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="exp-reveal">
                        <h3 className="font-hand text-2xl md:text-3xl text-dark/50 dark:text-indigo-200/60 mb-8 transition-colors duration-700">Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {projects.map((item, i) => (
                                <div key={i} className="exp-reveal group cursor-pointer">
                                    <h4 className="text-lg font-serif font-bold text-dark dark:text-stone-100 group-hover:text-soft-blue dark:group-hover:text-amber-400 transition-colors duration-400 flex items-center gap-2">
                                        {item.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h4>
                                    <p className="text-dark/70 dark:text-stone-300 font-sans text-sm mt-1 transition-colors duration-700">{item.role}</p>
                                    <p className="text-stone-400 dark:text-stone-500 font-sans text-xs mt-1 transition-colors duration-700">{item.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
