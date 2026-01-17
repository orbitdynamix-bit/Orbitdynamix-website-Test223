"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

const App = () => {
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

        <div className="text-center mb-16">
          <DotLottieReact
            src="https://lottie.host/82672441-c8b7-460e-99e0-aa5772ccccbc/FH2suqHh81.lottie"
            loop
            autoplay
          />
          <p className="text-center text-lg text-muted-foreground mb-8">
            Well... this is awkward. The page you're looking for doesn't exist.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default function AboutPage() {
  return <App />;
}