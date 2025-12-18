import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { PrivacyContent } from "@/components/sections/privacy-content";
import { CosmicBackground } from "@/components/sections/cosmic-background";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Header />
      <main className="pt-16 relative z-10">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
}
