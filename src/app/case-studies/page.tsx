import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-primary">Case</span> Studies
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our successful client projects and outcomes.
        </p>
      </main>
      <Footer />
    </div>
  );
}