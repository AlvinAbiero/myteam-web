import Contact from "../components/Contact";

export const metadata = {
  title: "Contact",
};

export default function contactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Contact />
    </main>
  );
}
