import React from 'react';
import Link from 'next/link';
import { Quote, Star, ArrowRight } from 'lucide-react';

interface Testimonial {
  name: string;
  company?: string;
  time: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sujit Ghosh',
    time: '2 years ago',
    rating: 5,
    text: "Working with Orbitdynamix has been an absolutely outstanding experience. As a top-tier web development company, they provided the best custom solutions that significantly accelerated my company’s online and offline growth strategies. I have worked with many agencies, but they are far more skilled and professional than any other web design companies I have encountered. Their intuitive care for robust website security combined with unique creativity is simply unmatched in the market. I eagerly look forward to many more opportunities of doing business with this exceptional team again.",
  },
  {
    name: 'Aritra Majumder',
    company: 'Millets and More',
    time: '1 year ago',
    rating: 4,
    text: "I became a client just a month ago and am truly happy with their exceptional digital marketing services. Their strategic campaigns have successfully increased our active followers and maximized my overall brand reach significantly in a short time. I look forward to continuing this successful collaboration for our future online business growth and sustained audience engagement strategies.",
  },
  {
    name: 'Rishav Talwar',
    time: '1 years ago',
    rating: 5,
    text: "A truly great experience! Their amazing management team is available 24/7 to listen to every requirement. They are the best at providing top-tier solutions. I loved working with them and the exceptional service provided.",
  },
  {
    name: 'Rohit',
    time: '6 months ago',
    rating: 5,
    text: "Fully satisfied with the custom logo design. It perfectly captures our brand identity. Highly recommended.",
  },
  {
    name: 'Smita Sarkar',
    time: '4 months ago',
    rating: 5,
    text: "Their 3D product design quality is outstanding. The team delivered precise, photorealistic renderings that exceeded our expectations. I am very happy with their professional 3D modeling and dedication to client satisfaction.",
  },

  {
    name: 'Biswajit Maity',
    time: '9 months ago',
    rating: 5,
    text: "The best choice for premium digital services and strategic business growth.",
  },
  {
    name: 'Sujoy Das',
    time: '3 years ago',
    rating: 5,
    text: "Excellent website customization work! A reliable, honest team providing top-notch web development solutions.",
  },
  {
    name: 'Margaret Dasgupta',
    time: '2 months ago',
    rating: 5,
    text: "Orbitdynamix delivers exceptional video editing services! Their creative approach boosted our viewer engagement significantly. Transparent communication and professional post-production skills make them a top choice. Highly recommend for high-quality video content.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-[#ff9900] fill-[#ff9900]' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md break-inside-avoid-column flex flex-col h-fit hover:shadow-xl hover:-translate-y-4 transition-all duration-300" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#quoteGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-16 h-16 mb-4" aria-hidden="true">
      <defs>
        <radialGradient id="quoteGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stop-color="#C9A6FF" />
          <stop offset="50%" stop-color="#7B5CFF" />
          <stop offset="100%" stop-color="#5B21B6" />
        </radialGradient>
      </defs>
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
    </svg>
    <p className="text-base font-urbanist leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary-dark)' }}>
      {testimonial.text}
    </p>
    <div className="mt-auto flex items-end justify-between">
      <div>
        <h6 className="text-lg font-semibold font-urbanist" style={{ color: 'var(--color-text-secondary-dark)' }}>{testimonial.name}</h6>
        {testimonial.company && (
          <p className="text-sm" style={{ color: 'var(--color-text-secondary-dark)' }}>{testimonial.company}</p>
        )}
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary-dark)' }}>{testimonial.time}</p>
      </div>
      <StarRating rating={testimonial.rating}/>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-24" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-bold mb-16">
          <span className="text-white">Client</span> <span
            className="animate-gradient font-urbanist"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Testimonials</span>
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/testimonials" className="inline-flex items-center gap-2 text-white font-urbanist font-semibold text-lg transition-transform hover:translate-x-1">
            View More
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;