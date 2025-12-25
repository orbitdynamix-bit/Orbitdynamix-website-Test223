import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Mission & <span className="text-primary">Vision</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Our mission is to deliver exceptional digital solutions.
        </p>
      </main>
      <Footer />
    </div>
  );
}