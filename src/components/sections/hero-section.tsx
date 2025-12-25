"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Particles from "../ui/particles";
import GlareHover from "../ui/glare-hover";

const HeroSection = () => {
  const designDevIcons = [
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-1-2-25.png?", alt: "Figma" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-2-2-26.png?", alt: "HTML 5" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-3-2-27.png?", alt: "React" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-4-2-28.png?", alt: "PHP" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-5-2-29.png?", alt: "Android" },
  ];

  const marketingIcons = [
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/adwords-11.png?", alt: "Google Ads" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/facebook-13.png?", alt: "Facebook Ads" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/instagram-1-14.png?", alt: "Instagram Ads" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/instagram-1-14.png?", alt: "Instagram Ads" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/twitter-15.png?", alt: "Twitter Ads" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/onqanet.technologies" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/onqanet_X" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/onqanet_technologies/" },
    { name: "Linkedin", icon: Linkedin, href: "https://www.linkedin.com/company/onqanettechnologiespvtltd/" },
  ];

  return (
    <section
      className="relative text-white pt-64 lg:pt-60 lg:pb-40 xl:pt-96 xl:pb-72 overflow-hidden min-h-screen"
      style={{
        background: "radial-gradient(80% 60% at 50% 0%, #F2E9FF 0%, #C9A6FF 25%, #8B5CF6 45%, #5B21B6 65%, #000000 100%)",
        paddingTop: 'calc(var(--spacing, 1rem) * 52)',
        paddingBottom: 'calc(var(--spacing, 1rem) * 30)',
      }}
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-x-12 gap-y-16">
          <div className="relative z-10">
            <h1 className="text-[48px] sm:text-[60px] lg:text-[72px] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Empowering <span style={{
                background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
                className="animate-gradient"
              >Business</span> with Digital Excellence
            </h1>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6">
              <GlareHover
                borderRadius="8px"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={2000}
                className="w-fit"
              >
                <Link
                  href="/contact"
                  className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-1000 text-sm sm:text-base shadow-lg animate-gradient hover:!bg-none hover:![animation:none]"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))',
                  }}
                >
                  START PROJECT
                  <ArrowUpRight size={20} />
                </Link>
              </GlareHover>
            </div>
            <p className="mt-12 text-white font-urbanist text-base lg:text-lg xl:text-xl font-medium max-w-lg leading-relaxed tracking-wide">
              We are a passionate team dedicated to building impactful digital experiences through innovative design, custom development, and strategic branding solutions.
            </p>
          </div>

          <div className="hidden lg:block w-full h-[300px] relative">
            {/* Right side content if any */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;