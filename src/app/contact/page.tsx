import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="pt-32">
        <div className="container py-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">Contact</span> Us
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Get in touch with our team for any inquiries.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}