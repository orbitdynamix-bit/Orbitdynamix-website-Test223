import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function CertificationPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Our <span className="text-primary">Certifications</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          View our industry certifications and awards.
        </p>
      </main>
      <Footer />
    </div>
  );
}