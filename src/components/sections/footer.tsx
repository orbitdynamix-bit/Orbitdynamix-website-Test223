"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronUp, Facebook, Twitter, Instagram, Linkedin, PinIcon as Pinterest } from "lucide-react";

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

    const socialLinks = [
        { href: "#", icon: Facebook, name: "Facebook" },
        { href: "#", icon: Twitter, name: "Twitter" },
        { href: "#", icon: Instagram, name: "Instagram" },
        { href: "#", icon: Pinterest, name: "Pinterest" },
        { href: "#", icon: Linkedin, name: "LinkedIn" },
    ];

    const digitalMarketingLinks = [
        { href: "#", text: "Search Engine Optimization" },
        { href: "#", text: "Pay Per Click" },
        { href: "#", text: "Social Media Paid Marketing" },
        { href: "#", text: "Social Media Optimization" },
    ];

    const webSolutionsLinks = [
        { href: "#", text: "Website Design" },
        { href: "#", text: "Logo Design" },
        { href: "#", text: "Website Development" },
        { href: "#", text: "E-Commerce" },
        { href: "#", text: "Mobile App Development" },
        { href: "#", text: "Digital Marketing" },
    ];

    const mobilitySolutionsLinks = [
        { href: "#", text: "Mobile App Development" },
        { href: "#", text: "Terms & Condition" },
        { href: "#", text: "Privacy Policy" },
        { href: "#", text: "Refund Policy" },
        { href: "#", text: "Contact" },
    ];

    return (
        <>
            <footer id="footer" className="bg-[#1A1A1A] pt-0 text-muted-foreground">
                <div className="container py-12 md:py-24 px-4">
                    <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8">
                        <div className="w-full md:w-auto">
                            <div className="mb-6">
                                <Image
                                    src="/images/logo.png"
                                    alt="OrbitDynamix"
                                    width={150}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="mt-8 md:mt-16 flex items-center gap-6 flex-wrap">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <h6 className="text-lg font-semibold text-white mb-4 md:mb-6">Solution</h6>
                            <ul className="space-y-3">
                                {digitalMarketingLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors block py-1">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-auto">
                            <h6 className="text-lg font-semibold text-white mb-4 md:mb-6">Services</h6>
                            <ul className="space-y-3">
                                {webSolutionsLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors block py-1">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-auto">
                            <h6 className="text-lg font-semibold text-white mb-4 md:mb-6">Quick Links</h6>
                            <ul className="space-y-3">
                                {mobilitySolutionsLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors block py-1">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-400 py-8">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
                        <p className="text-sm text-center text-gray-400">
                            © Copyright 2024. Designed & Developed by OrbitDynamix Pvt. Ltd.
                        </p>
                    </div>
                </div>
            </footer>


            {/* <div className="fixed bottom-5 left-5 z-50">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/whatsapp-66.png"
                    alt="WhatsApp"
                    width={50}
                    height={50}
                    unoptimized
                    className="hover:scale-110 transition-transform"
                />
            </div> */}

            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    size="icon"
                    className="fixed bottom-5 right-5 z-50 rounded-full bg-stone-700 hover:bg-primary text-white w-12 h-12"
                    aria-label="Go to top"
                >
                    <ChevronUp className="h-6 w-6" />
                </Button>
            )}

        </>
    );
};

export default Footer;