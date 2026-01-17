"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    MapPin,
    Mail,
    Phone,
    PinIcon as Pinterest,
} from "lucide-react";

const ContactSection = () => {
    const socialLinks = [
        { href: "#", icon: Facebook, name: "Facebook" },
        { href: "#", icon: Twitter, name: "Twitter" },
        { href: "#", icon: Instagram, name: "Instagram" },
        { href: "#", icon: Pinterest, name: "Pinterest" },
        { href: "#", icon: Linkedin, name: "LinkedIn" },
    ];

    return (
        <section className="bg-[#f5f5f5] pt-0 pb-40 lg:pb-48" style={{ backgroundColor: "var(--color-background-primary)" }}>
            <div className="container px-0 mx-auto max-w-[1400px]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center rounded-3xl translate-y-20 gap-y-6">
                    <div className="w-10/12 mx-auto lg:w-[35%] lg:mx-0 bg-[#f5f5f5] p-6 md:p-10 text-[#1A1A1A] relative z-20 shadow-2xl rounded-3xl h-fit lg:self-center lg:-mr-16">
                        <h2 className="text-3xl font-bold mb-4 text-black">Contact Information</h2>
                        <p className="font-urbanist text-gray-600 mb-12">Fill up the form to get in touch with us</p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-6 h-6 text-[#1A1A1A] shrink-0 mt-1" />
                                <p className="text-sm leading-relaxed font-urbanist text-gray-600">
                                    F/5 Shahid Smrity Colony, Panchasayar, Kolkata -700094
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail className="w-6 h-6 text-[#1A1A1A] shrink-0" />
                                <a
                                    href="mailto:sales@onqanet.com"
                                    className="text-sm font-urbanist text-gray-600 hover:text-primary transition-colors"
                                >
                                    official@orbitdynamix.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone className="w-6 h-6 text-[#1A1A1A] shrink-0" />
                                <p className="text-sm font-urbanist text-gray-600">+91 6297369832 / 7908099602</p>
                            </div>
                        </div>


                    </div>

                    <div className="w-10/12 mx-auto lg:w-[65%] lg:mx-0 bg-[#DBDBDB] p-6 md:p-10 lg:pl-24 rounded-3xl relative z-10">
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Send a message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    placeholder="Full Name"
                                    className="bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist placeholder:text-gray-500 h-12 rounded-lg"
                                />
                                <Input
                                    type="tel"
                                    placeholder="Phone"
                                    className="bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist placeholder:text-gray-500 h-12 rounded-lg"
                                />
                            </div>
                            <Input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist placeholder:text-gray-500 h-12 rounded-lg"
                            />
                            <Select>
                                <SelectTrigger className="bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist data-[placeholder]:text-gray-500 h-12! rounded-lg">
                                    <SelectValue placeholder="Support" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="sales">Sales</SelectItem>
                                    <SelectItem value="support">Support</SelectItem>
                                    <SelectItem value="billing">Billing</SelectItem>
                                </SelectContent>
                            </Select>
                            <Textarea
                                placeholder="Message"
                                className="bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist placeholder:text-gray-500 min-h-[120px] rounded-lg"
                            />

                            <div>
                                <Button className="bg-[#1A1A1A] font-urbanist text-white hover:bg-black px-12 h-12 rounded-full font-bold uppercase tracking-wider">
                                    SUBMIT
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
