"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    items: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Pay-Per-Click (PPC) Advertising",
      "Content Marketing",
      "Analytics and Data-driven Insights",
      "Google My Business",
    ],
  },
  {
    title: "Website Design & Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
    items: [
      "Responsive Website Design",
      "Custom Website Development",
      "E-commerce Solutions",
      "CMS Website development",
      "Website Maintenance and Support",
      "SEO Integration",
    ],
  },
  {
    title: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2370&auto=format&fit=crop",
    items: [
      "Brochure/Flyer Design",
      "Package Design",
      "Graphic Design",
      "Powerpoint Presentation",
      "Social Media Graphics",
      "Web Design",
    ],
  },
];

const ExpertiseListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <Image
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/list-arrow-50.png?"
      alt="Arrow bullet point"
      width={16}
      height={16}
      className="w-4 h-4 mr-4 mt-1 flex-shrink-0"
    // style={{ filter: "brightness(0) invert(1)" }} // Optional: ensure white icon if needed
    />
    <span className="text-base text-white">{children}</span>
  </li>
);

const ExpertiseDetails = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const section = sectionRef.current;

    if (!trigger || !section) return;

    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to(section, {
          x: () => -(section.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + (section.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true,
          },
        });
      });
    }, trigger);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background-primary py-20 lg:py-[120px] overflow-hidden">
      <div className="container">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white font-display">
          Our <span
            className="animate-gradient"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Expertise</span>
        </h2>

        {/* ScrollTrigger Wrapper */}
        <div ref={triggerRef} className="w-full relative h-auto lg:h-[70vh] flex items-center">
          {/* Moving Container */}
          <div ref={sectionRef} className="flex flex-col lg:flex-row w-full lg:w-max h-auto lg:h-full items-center gap-12 lg:gap-16 px-2 md:px-0">
            {expertiseData.map((service, index) => (
              <div
                key={index}
                className="expertise-item w-full lg:w-screen flex-shrink-0 px-4 md:px-12 lg:px-24 box-border h-auto lg:h-full flex items-center justify-center"
              >
                <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center bg-white/5 rounded-2xl p-8 lg:p-10 border border-white/10 backdrop-blur-sm">
                  {/* Content Column */}
                  <div>
                    <h4 className="flex items-center text-2xl md:text-4xl font-semibold text-white mb-8">
                      <span className="relative inline-block h-6 w-6 shrink-0 rounded-full border-2 border-dotted border-primary mr-4">
                        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></span>
                      </span>
                      {service.title}
                    </h4>
                    <ul className="space-y-6 font-urbanist pl-0 lg:pl-10">
                      {service.items.map((item, itemIndex) => (
                        <ExpertiseListItem key={itemIndex}>{item}</ExpertiseListItem>
                      ))}
                    </ul>
                  </div>

                  {/* Image Column */}
                  <div className="hidden lg:block relative h-[250px] md:h-[400px] lg:h-[400px] w-full rounded-xl overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseDetails;