import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { TermsContent } from "@/components/sections/terms-content";
import { CosmicBackground } from "@/components/sections/cosmic-background";

export default function TermsPage() {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Header />
      <main className="pt-16 relative z-10">
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}
