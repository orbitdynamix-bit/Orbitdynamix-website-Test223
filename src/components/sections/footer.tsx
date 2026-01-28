"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronUp, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <footer
            className="text-white pt-16 md:pt-24 relative overflow-hidden font-sans"
            style={{ background: "radial-gradient(80% 60% at 50% 100%, #F2E9FF 0%, #C9A6FF 25%, #8B5CF6 45%, #5B21B6 65%, #000000 100%)" }}
        >
            {/* Background Decorative Circle - Adjusted for dark background */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                    zIndex: 0
                }}
            />

            <div className="w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 px-6">
                    {/* Left: Contact */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Contact</p>
                            <a href="mailto:official@orbitdynamix.com" className="text-sm font-bold hover:underline block mb-2" style={{ color: 'var(--color-text-secondary-dark)' }}>
                                official@orbitdynamix.com
                            </a>
                            <a href="tel:6297369832" className="text-sm font-bold" style={{ color: 'var(--color-text-secondary-dark)' }}>
                                6297369832 / 7908099602
                            </a>
                        </div>
                    </div>

                    {/* Center: CTA */}
                    <div className="flex flex-col items-start text-left md:items-center md:text-center space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight max-w-xs">
                            Got a project? Want to collaborate?
                        </h3>
                        <a
                            href="/contact"
                            className="bg-[#2B47FC] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform"
                        >
                            Discuss your project
                            <span className="bg-white/20 rounded-full p-1">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </a>
                    </div>

                    {/* Right: Locations */}
                    <div className="flex flex-col md:items-end text-left md:text-left space-y-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">India</p>
                            <p className="text-sm font-bold leading-relaxed max-w-[200px]">
                                F/5 Shahid Smrity Colony,<br />
                                Panchasayar, Kolkata 700094
                            </p>
                        </div>
                    </div>
                </div>

                {/* Large Bottom Text */}
                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-8 flex flex-col md:row items-center justify-between gap-6 md:flex-row text-[10px] sm:text-xs font-bold uppercase tracking-widest px-6">
                    <p className="text-white text-center md:text-left text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                        © Copyright 2025. OrbitDynamix. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8">
                        <a href="/terms" className="hover:opacity-60 transition-opacity">Terms & Conditions</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                            <FaFacebookF className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                            <FaGithub className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                            <FaLinkedinIn className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Large Bottom Text */}
                <div className="w-full text-center px-6">
                    <h2 className="text-[12vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap">
                        Let's Work Together
                    </h2>
                </div>
            </div>

            {/* Back to Top Button */}
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    size="icon"
                    className="fixed bottom-5 right-5 z-50 rounded-full bg-stone-700 hover:bg-primary text-white w-12 h-12 shadow-2xl transition-all"
                    aria-label="Go to top"
                >
                    <ChevronUp className="h-6 w-6" />
                </Button>
            )}
        </footer>
    );
};

export default Footer;