import BuildSection from "./components/BuildSection";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <BuildSection />
      <Testimonials />
    </main>
  );
}
