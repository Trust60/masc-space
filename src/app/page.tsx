import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Courses } from "@/components/sections/courses";
import { Reviews } from "@/components/sections/reviews";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { CosmicBackground } from "@/components/sections/cosmic-background";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Header />
      <main className="pt-16 relative z-10">
        <Hero />
        <Features />
        <Courses />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
