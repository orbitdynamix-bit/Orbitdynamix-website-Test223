import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Our <span className="text-primary">Blogs</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Read our latest insights and industry updates.
        </p>
      </main>
      <Footer />
    </div>
  );
}