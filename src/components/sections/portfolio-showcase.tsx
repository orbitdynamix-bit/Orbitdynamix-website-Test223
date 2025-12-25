"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import GlareHover from "@/components/ui/glare-hover";

const projects = [
  {
    name: "Flipspot",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/img-1-1-24.jpeg",
    link: "#",
  },
  {
    name: "Violet",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/img-2--25.jpeg",
    link: "#",
  },
  {
    name: "Lilyvaly",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/img-3--26.jpeg",
    link: "#",
  },
  {
    name: "Moon Forest",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/img-5--27.jpeg",
    link: "#",
  },
  {
    name: "Just Opal",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/img-4--28.jpeg",
    link: "#",
  },
];

const LaptopMockup = ({ src, alt, link }: { src: string; alt: string; link: string }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer" className="block w-full max-w-[597px] group">
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] group-hover:scale-[1.01] transition-transform duration-300">
      <div className="rounded-md overflow-hidden h-[156px] md:h-[278px] bg-black">
        <Image
          src={src}
          alt={alt}
          width={512}
          height={278}
          className="h-[156px] md:h-[278px] w-full object-cover object-top"
        />
      </div>
    </div>
    <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[341px] md:h-[21px] md:max-w-[597px] group-hover:scale-[1.01] transition-transform duration-300" style={{ background: 'linear-gradient(to right, #d2dde9 0%, #f9fcff 15%, #e5ebf2 40%, #e5ebf2 60%, #f9fcff 85%, #d2dde9 100%)' }}>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
    </div>
  </Link>
);


export default function PortfolioShowcase() {
  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-24" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Our</span> <span
              className="animate-gradient"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Latest</span> <span className="text-white">Projects</span>
          </h2>
        </div>
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <LaptopMockup src={project.image} alt={project.name} link={project.link} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground border-none w-12 h-12 rounded-full shadow-md hover:bg-secondary/90" style={{ backgroundColor: "var(--color-background-primary)" }} />
            <CarouselNext className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground border-none w-12 h-12 rounded-full shadow-md hover:bg-secondary/90" style={{ backgroundColor: "var(--color-background-primary)" }} />
          </Carousel>
        </div>
        <div className="text-center w-fit mx-auto mt-16">
          <GlareHover
            asChild
            borderRadius="9999px"
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={2000}
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center text-secondary-foreground font-urbanist font-semibold py-[14px] px-8 rounded-full border border-white/20 transition-opacity hover:opacity-90 text-base"
              style={{ backgroundColor: "var(--color-background-primary)" }}
            >
              VIEW ALL PROJECTS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </GlareHover>
        </div>
      </div>
    </section>
  );
}