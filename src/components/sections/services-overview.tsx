"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollStack from '@/components/ui/scroll-stack';

interface TechIcon {
  src: string;
  alt: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
  techIcons: TechIcon[];
}

const servicesData: Service[] = [
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/img-3-3-14.png?',
    title: 'Digital Marketing',
    description: 'Our experts engineer digital strategies to drive targeted traffic and optimize conversion rates effectively. We focus on building lasting customer relationships and brand loyalty through data-driven digital marketing solutions. Experience scalable business growth at every stage of your funnel. Let’s turn your digital goals into measurable, revenue-generating success today.',
    link: '#',
    techIcons: [
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-1-3-20.png?', alt: 'Google Ads' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-2-3-21.png?', alt: 'Google My Business' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-3-3-22.png?', alt: 'Facebook' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-4-3-23.png?', alt: 'Instagram' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-5-3-24.png?', alt: 'Twitter' },
    ],
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/img-2-3-15.png?',
    title: 'Website Design & Development',
    description: 'Orbitdynamix ensures your website works hard for your business. We provide custom web design and development solutions perfectly tailored to your brand identity and target audience. Our focus is meeting your strategic business objectives with a high-performance site. From the moment you start, we turn your vision into a digital reality.',
    link: '#',
    techIcons: [
      // As per analysis, these icons were not provided in the section-specific assets.
    ],
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/curve-16.png?',
    title: 'Graphic Design',
    description: 'Orbitdynamix delivers professional graphic design services designed to elevate your brand presence. Our expert designers combine artistic creativity with strategic insight to create stunning visuals that communicate your message effectively to the right audience. We ensure every design leaves a lasting impression. Trust us to build your unique brand identity today.',
    link: '#',
    techIcons: [
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-1-1-34.png?', alt: 'Photoshop' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-2-1-36.png?', alt: 'Illustrator' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-3-1-35.png?', alt: 'After Effects' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-4-1-37.png?', alt: 'Figma' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-5-5-38.png?', alt: 'Canva' },
    ],
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/img-4-3-17.png?',
    title: 'Logo Design',
    description: 'A logo is the visual cornerstone of your brand. At Orbitdynamix, we specialize in crafting professional logo designs that are visually striking and meaningful. Our process starts by understanding your business values and target audience, ensuring every element aligns with your brand’s identity. We create logos that effectively define your market positioning.',
    link: '#',
    techIcons: [
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-1-1-34.png?', alt: 'Photoshop' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-2-1-36.png?', alt: 'Illustrator' },
    ],
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/img-5-2-18.png?',
    title: 'Mobile App Development',
    description: 'We proudly stand as a top mobile app development company in India, a center for global technology. Leveraging years of experience and emerging technologies, we design and develop powerful mobile applications. Our team transforms ideas into intuitive, feature-rich digital products. Trust us to build scalable solutions that drive your digital success.',
    link: '#',
    techIcons: [
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-1-4-39.png?', alt: 'Java' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-2-7-40.png?', alt: 'Kotlin' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-3-1-1-41.png?', alt: 'Flutter' },
    ],
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/mobile-shopping-19.png?',
    title: 'E-Commerce',
    description: 'We understand that effective eCommerce goes beyond selling products online. It is about creating a seamless, trustworthy shopping experience that converts. That is why we offer tailored eCommerce solutions designed to drive real growth and customer loyalty. We help you build a high-performance store. Experience digital retail strategies that scale your business.',
    link: '#',
    techIcons: [
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-1-5-42.png?', alt: 'React' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-2-5-43.png?', alt: 'PHP' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-3-7-44.png?', alt: 'Laravel' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-4-5-45.png?', alt: 'Magento' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-5-1-1-46.png?', alt: 'WooCommerce' },
    ],
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/images/customer-support-20.png?',
    title: 'Support',
    description: 'Ensure your business runs efficiently with our professional Support Services. We offer proactive technical support tailored for both startups and large enterprises. Our team guarantees minimal downtime and maximum productivity by resolving issues swiftly. We keep your systems secure and operational, allowing you to focus on growth while we handle the technical maintenance.',
    link: '#',
    techIcons: [
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-1-6-47.png?', alt: '24/7 Support' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-2-6-48.png?', alt: 'Email Support' },
      { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-3-6-49.png?', alt: 'Technical Assistance' },
    ],
  },
];

const ServiceCard = ({ icon, title, description, link, techIcons }: Service) => (
  <div className="bg-card/40 backdrop-blur-md border border-border rounded-3xl p-6 md:p-10 transition-all duration-300 ease-in-out">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
      <div
        className="w-[120px] h-[120px] rounded-full flex-shrink-0 flex items-center justify-center"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #C9A6FF, #7B5CFF, #5B21B6)' }}
      >
        <Image src={icon} alt={`${title} icon`} width={64} height={64} className="object-contain" />
      </div>
      <div className="flex-1">
        <h4 className="text-2xl md:text-[28px] font-semibold leading-tight text-text-primary-dark">{title}</h4>
        <p className="font-urbanist text-text-secondary-dark mt-4 line-clamp-3 md:line-clamp-none">{description}</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-6">
          <a
            href={link}
            className="flex items-center gap-2 text-sm font-semibold text-white border border-white/20 rounded-full px-6 py-3 hover:bg-primary/10 hover:border-primary transition-colors"
          >
            KNOW MORE
            <ArrowRight className="w-4 h-4" />
          </a>
          {techIcons.length > 0 && (
            <div className="flex items-center gap-2">
              {techIcons.map((techIcon, index) => (
                <div key={index} className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center border border-white/10">
                  <Image src={techIcon.src} alt={techIcon.alt} width={24} height={24} className="object-contain" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ServicesOverview = () => {
  return (
    <section className="bg-background-primary py-24" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-5">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-text-primary-dark">
          Our <span
            className="animate-gradient"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Services</span>
        </h2>
        <ScrollStack
          items={servicesData}
          renderItem={(service, index) => (
            <ServiceCard {...service} />
          )}
        />
      </div>
    </section>
  );
};

export default ServicesOverview;