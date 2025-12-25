import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function WebsiteDesignDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Website Design & <span className="text-primary">Development</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Get stylish and functional websites through our expert design and development services.
        </p>
      </main>
      <Footer />
    </div>
  );
}