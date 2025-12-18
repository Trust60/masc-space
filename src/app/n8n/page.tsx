import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { N8NHero } from "@/components/sections/n8n-hero";
import { N8NReasons } from "@/components/sections/n8n-reasons";
import { N8NProgram } from "@/components/sections/n8n-program";
import { N8NInstructor } from "@/components/sections/n8n-instructor";
import { N8NPricing } from "@/components/sections/n8n-pricing";
import { N8NCTA } from "@/components/sections/n8n-cta";
import { CosmicBackground } from "@/components/sections/cosmic-background";

export default function N8NPage() {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Header />
      <main className="pt-16 relative z-10">
        <N8NHero />
        <N8NReasons />
        <N8NProgram />
        <N8NInstructor />
        <N8NPricing />
        <N8NCTA />
      </main>
      <Footer />
    </div>
  );
}
