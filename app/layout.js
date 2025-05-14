import { Geist, Geist_Mono, Livvic } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const livvic = Livvic({
  subsets: ["latin"], // or ['latin-ext'] if you need more
  weight: ["200", "300", "500", "400", "700"],
  variable: "--font-livvic", // optional for CSS variable
});

export const metadata = {
  title: {
    template: "%s / MyTeam",
    default: "MyTeam",
  },
  description:
    "This is a landing page for a fictional company called MyTeam. It is built with Next.js",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${livvic.variable} antialiased`}
      >
        <Navbar />
        <main className="mx-auto">{children}</main>
        <Footer />

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: { fontSize: "1.6rem", padding: "1.4rem 2.4rem" },
          }}
        />
      </body>
    </html>
  );
}
