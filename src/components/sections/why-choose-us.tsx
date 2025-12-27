"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const whyChooseUsData = [
  {
    number: "1",
    title: "TOP DIGITAL EXPERTISE",
    description: "Use the power of the best digital marketing company in Kolkata.",
  },
  {
    number: "2",
    title: "AWARD-WINNING WEBSITE DESIGN",
    description: "Crafting visually stunning and user-friendly websites.",
  },
  {
    number: "3",
    title: "COMPELLING BRAND IDENTITY",
    description: "Make a lasting impression with impactful designs that tell your brand story.",
  },
  {
    number: "4",
    title: "CUTTING-EDGE TECHNOLOGY",
    description: "Reach users with innovative and user-friendly technology for your unique needs.",
  },
  {
    number: "5",
    title: "ONE-STOP SHOP",
    description: "From website to digital marketing, enjoy the convenience of having everything.",
  },
  {
    number: "6",
    title: "RESULTS-DRIVEN APPROACH",
    description: "Track your progress with detailed reports and celebrate your success stories with us.",
  },
];

const AnimatedNumber = ({ number, delay }: { number: string; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const animationProps = isMobile ? { opacity: 1 } : (isInView ? { opacity: 1 } : { opacity: 0 });

  return (
    <div className="relative">
      {/* Stroke outline (always visible) */}
      <span
        className="font-display text-6xl md:text-[80px] leading-none font-black text-transparent absolute top-0 left-0"
        style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)' }}
      >
        {number}
      </span>
      {/* Gradient fill (animates in) */}
      <motion.span
        ref={ref}
        className="font-display text-6xl md:text-[80px] leading-none font-black relative animate-gradient"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        animate={animationProps}
        transition={{
          duration: 0.8,
          delay: isMobile ? 0 : delay,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {number}
      </motion.span>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="bg-background-secondary py-24 lg:py-32" >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-text-primary-darkont-display text-[56px] md:text-[72px] font-extrabold leading-[1.1] text-white tracking-[-0.02em]">
              Why<br />
              <span
                className="animate-gradient"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Choose</span><br />
              <span
                className="animate-gradient"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Us</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {whyChooseUsData.map((item, index) => (
                <div key={item.number} className="flex flex-row items-start gap-5">
                  <AnimatedNumber number={item.number} delay={index * 0.1} />
                  <div className="pt-2">
                    <h6 className="font-display text-xl font-bold uppercase text-white mb-3">
                      {item.title}
                    </h6>
                    <p className="font-urbanist text-base font-normal text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;