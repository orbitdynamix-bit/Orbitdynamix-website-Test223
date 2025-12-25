import Image from "next/image";

interface Technology {
  name: string;
  icon: string;
}

const technologies: Technology[] = [
  { name: "HTML", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-1-4-51.png?" },
  { name: "CSS", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-2-4-52.png?" },
  { name: "JavaScript", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-3-4-53.png?" },
  { name: "React JS", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-4-4-54.png?" },
  { name: "Wordpress", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-5-3-55.png?" },
  { name: "PHP", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-6-1-56.png?" },
  { name: "Laravel", icon: "" },
  { name: "JAVA", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-9-57.png?" },
  { name: "MySQL", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-8-58.png?" },
  { name: "Flutter", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-3-1-1-41.png?" },
  { name: "Kotlin", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/icon-2-7.png?" },
  { name: "Figma", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-12-59.png?" },
  { name: "Illustrator", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-14-60.png?" },
  { name: "Photoshop", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-13-61.png?" },
  { name: "After Effects", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-15-62.png?" },
  { name: "Semrush", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-16-12.png?" },
  { name: "SpyFu", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-17-63.png?" },
  { name: "Adzooma", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/812d8f19-2da5-4a6c-9960-62a57cc52b3f-onqanet-com/assets/icons/img-18-64.png?" },
];

const TechnologyStack = () => {
  return (
    <section className="bg-background-light py-20 lg:py-24" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="container">
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-12 lg:mb-16">
          <span className="text-white">Technology</span> <span className="text-accent-red animate-gradient" style={{ background: 'radial-gradient(circle at 30% 30%, rgb(201, 166, 255), rgb(123, 92, 255), rgb(91, 33, 182))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>We</span> <span className="text-white">Use</span>
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-center bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full"
                style={{ paddingBlock: 'calc(var(--spacing) * 4.5)', paddingInline: '1rem' }}
              >
                <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  width={28}
                  height={28}
                  className="w-6 h-6 md:w-7 md:h-7"
                />
                <h6 className="ml-3 text-sm md:text-base font-semibold text-text-primary-light whitespace-nowrap">
                  {tech.name}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;