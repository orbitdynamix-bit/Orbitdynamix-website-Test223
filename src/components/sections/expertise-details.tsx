import React from "react";
import Image from "next/image";
import InfiniteMenu from "@/components/ui/infinite-menu";

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

const menuItems = expertiseData.map(service => ({
  image: service.image,
  title: service.title,
  description: service.items[0], // Using first item as a short description
  link: "#"
}));

const ExpertiseListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <Image
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/list-arrow-50.png?"
      alt="Arrow bullet point"
      width={16}
      height={16}
      className="w-4 h-4 mr-4 mt-1 flex-shrink-0"
    />
    <span className="text-base text-white">{children}</span>
  </li>
);

const ExpertiseDetails = () => {
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

        {/* Infinite Menu Section */}
        <div className="h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
          <InfiniteMenu items={menuItems} />
        </div>

      </div>
    </section>
  );
};

export default ExpertiseDetails;