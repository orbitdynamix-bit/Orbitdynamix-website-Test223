import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="text-primary">Us</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn more about Onqanet Technologies and our mission.
        </p>
      </main>
      <Footer />
    </div>
  );
}