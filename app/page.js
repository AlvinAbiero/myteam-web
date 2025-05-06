import BuildSection from "./components/BuildSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <BuildSection />
    </main>
  );
}
