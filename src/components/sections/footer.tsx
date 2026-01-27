"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronUp, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { FaBehance, FaDribbble, FaLinkedinIn } from "react-icons/fa";

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

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    {/* Left: Contact */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Contact</p>
                            <a href="mailto:info@orbitdynamix.com" className="text-xl md:text-2xl font-bold hover:underline block mb-2">
                                info@orbitdynamix.com
                            </a>
                            <a href="tel:+1234567890" className="text-xl md:text-2xl font-bold hover:underline">
                                +91 123-456-7890
                            </a>
                        </div>
                    </div>

                    {/* Center: CTA */}
                    <div className="flex flex-col items-center text-center space-y-8">
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
                    <div className="flex flex-col md:items-end text-left md:text-right space-y-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">USA</p>
                            <p className="text-sm font-bold leading-relaxed max-w-[200px]">
                                123 Digital Ave, Suite 100,<br />
                                Tech City, NY 10001
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">India</p>
                            <p className="text-sm font-bold leading-relaxed max-w-[200px]">
                                OrbitDynamix Tower, Sec 5,<br />
                                Salt Lake, Kolkata 700091
                            </p>
                        </div>
                    </div>
                </div>

                {/* Large Bottom Text */}
                <div className="w-full text-center mb-8">
                    <h2 className="text-[12vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap">
                        Let's Work Together
                    </h2>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-8 flex flex-col md:row items-center justify-between gap-6 md:flex-row text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                    <p className="opacity-60 text-center md:text-left">
                        © Copyright 2024. OrbitDynamix. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8">
                        <a href="/terms" className="hover:opacity-60 transition-opacity">Terms & Conditions</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                            <FaBehance className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                            <FaDribbble className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                            <FaLinkedinIn className="w-4 h-4" />
                        </a>
                    </div>
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