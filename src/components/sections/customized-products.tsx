import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  isReversed?: boolean;
}

const productsData = [
  {
    title: "Human Resource Management",
    description: "Customized HR solutions integrating digital tools, from hiring to employee engagement, promote effective workforce management and the expansion of organizations.",
    link: "#",
    imageUrl: "",
  },
  {
    title: "E-Learning Portal",
    description: "Custom e-learning platforms with engaging content, user-friendly interfaces, and personalized learning experiences, optimizing knowledge transfer and skill development.",
    link: "#",
    imageUrl: "",
  },
  {
    title: "Market Place",
    description: "Customized online markets that provide user-friendly interfaces, scalable E-commerce solutions, and branding to increase sales and improve consumer engagement.",
    link: "#",
    imageUrl: "",
  },
  {
    title: "Crowdfunding",
    description: "Platforms for crowdfunding that are tailored to each campaign and provide secure payment methods and marketing to increase campaign visibility and fundraising success.",
    link: "#",
    imageUrl: "",
  },
  {
    title: "Hotel Management",
    description: "Tailor-made hotel management systems, incorporating mobile app development for reservations, guest interactions, operations, and optimizing guest experiences.",
    link: "#",
    imageUrl: "",
  },
];

const ProductCard: React.FC<ProductCardProps> = ({ title, description, link, imageUrl, isReversed = false }) => (
  <div className="bg-background-secondary border border-white/10 rounded-[20px] p-6 md:p-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className={`flex flex-col justify-center space-y-6 ${isReversed ? 'lg:order-last' : ''}`}>
        <h6 className="text-xl lg:text-2xl font-semibold text-white">{title}</h6>
        <p className="text-text-secondary-dark leading-relaxed">{description}</p>
        <a
          href={link}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-white border-2 border-white/20 rounded-lg px-7 py-2.5 w-fit hover:border-primary hover:text-primary transition-colors duration-300"
        >
          LEARN MORE
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      <div
        className={`flex items-center justify-center ${isReversed ? 'lg:order-first' : ''}`}
        style={{ perspective: '1000px' }}
      >
        <div className="relative w-full h-auto transition-transform duration-300 hover:scale-105">
          <Image
            src={imageUrl}
            alt={title}
            width={550}
            height={367}
            className="rounded-lg object-contain w-full"
            style={{ transform: 'rotateY(25deg) rotateX(10deg)' }}
          />
        </div>
      </div>
    </div>
  </div>
);

const CustomizedProducts = () => {
  return (
    <section className="bg-background-primary py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary-dark">
            Our Customized <span className="text-primary">Products</span>
          </h2>
        </div>
        <div className="space-y-8 max-w-6xl mx-auto">
          {productsData.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              link={product.link}
              imageUrl={product.imageUrl}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizedProducts;