import BuildSection from "./components/BuildSection";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export const metadata = {
  title: "Home / MyTeam",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Hero />
      <BuildSection />
      <Testimonials />
      <Cta />
    </main>
  );
}
