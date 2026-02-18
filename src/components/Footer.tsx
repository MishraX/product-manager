export default function Footer() {
    return (
        <footer className="bg-dark border-t border-white/10 py-14 md:py-16 px-5 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Email in Caveat hand-drawn font */}
                <a
                    href="mailto:mishraaa.suraj@gmail.com"
                    className="text-2xl md:text-5xl font-hand text-white hover:text-white/80 transition-colors inline-block"
                >
                    mishraaa.suraj@gmail.com
                </a>

                {/* Social Icons — official brand colors */}
                <div className="flex justify-center items-center gap-6 md:gap-8">
                    {/* Figma — official logo with brand colors */}
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                        title="Figma"
                    >
                        <svg width="24" height="24" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                        </svg>
                    </a>

                    {/* Instagram — official gradient logo */}
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                        title="Instagram"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="igGrad1" cx="30%" cy="107%" r="150%">
                                    <stop offset="0%" stopColor="#fdf497" />
                                    <stop offset="5%" stopColor="#fdf497" />
                                    <stop offset="45%" stopColor="#fd5949" />
                                    <stop offset="60%" stopColor="#d6249f" />
                                    <stop offset="90%" stopColor="#285AEB" />
                                </radialGradient>
                            </defs>
                            <rect width="24" height="24" rx="5.5" fill="url(#igGrad1)" />
                            <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.5" fill="none" />
                            <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
                            <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
                        </svg>
                    </a>

                    {/* LinkedIn — official brand color #0A66C2 */}
                    <a
                        href="https://linkedin.com/in/mishrax27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                        title="LinkedIn"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-white/30 text-xs font-sans">
                    &copy; {new Date().getFullYear()} Suraj Mishra. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
