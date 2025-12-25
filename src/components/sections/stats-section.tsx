"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface StatItem {
  finalCount: number;
  iconSrc: string;
  label: string;
  alt: string;
}

const statsData: StatItem[] = [
  {
    finalCount: 20,
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/stat-icon-1-16.png?",
    label: "Total Projects",
    alt: "Icon representing total projects",
  },
  {
    finalCount: 15,
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/stat-icon-2-17.png?",
    label: "App Development",
    alt: "Icon representing app development",
  },
  {
    finalCount: 13,
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/stat-icon-3-18.png?",
    label: "E-Commerce",
    alt: "Icon representing e-commerce",
  },
  {
    finalCount: 60,
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/stat-icon-4-19.png?",
    label: "Happy Customers",
    alt: "Icon representing happy customers",
  },
];

const AnimatedStat = ({ finalCount, iconSrc, label, alt }: StatItem) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="flex items-center">
        <h2 className="text-6xl md:text-[96px] font-black leading-none text-white tabular-nums">
          {inView ? <CountUp end={finalCount} duration={2.5} /> : "0"}
        </h2>
        <span
          className="text-6xl md:text-[96px] font-black leading-none"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #C9A6FF, #7B5CFF, #5B21B6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >+</span>
      </div>

      <p className="mt-4 text-base font-medium text-muted-foreground font-urbanist">{label}</p>
    </div>
  );
};

const MarqueeContent = () => (
  <div className="flex shrink-0 items-center">
    <h3 className="whitespace-nowrap px-4 text-3xl font-bold uppercase text-white">Graphic Design</h3>
    <span
      className="px-4 text-3xl font-bold animate-gradient"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #C9A6FF, #7B5CFF, #5B21B6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >•</span>
    <h3 className="whitespace-nowrap px-4 text-3xl font-bold uppercase text-white">Web Design</h3>
    <span
      className="px-4 text-3xl font-bold animate-gradient"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #C9A6FF, #7B5CFF, #5B21B6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >•</span>
    <h3 className="whitespace-nowrap px-4 text-3xl font-bold uppercase text-white">Web Development</h3>
    <span
      className="px-4 text-3xl font-bold animate-gradient"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #C9A6FF, #7B5CFF, #5B21B6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >•</span>
    <h3 className="whitespace-nowrap px-4 text-3xl font-bold uppercase text-white">Digital Marketing</h3>
    <span
      className="px-4 text-3xl font-bold animate-gradient"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #C9A6FF, #7B5CFF, #5B21B6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >•</span>
  </div>
);

const StatsSection = () => {
  return (
    <>
      <style>
        {`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 5s linear infinite;
        }
        `}
      </style>
      <section className="w-full bg-background-secondary">
        <div className="container mx-auto py-20 lg:py-[120px]">
          <div className="grid grid-cols-2 gap-y-16 gap-x-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {statsData.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden py-[50px]">
          <div className="animate-marquee flex">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;