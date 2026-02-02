import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://golden-fitness-gym.vercel.app"), 
  title: {
    default: "Golden Fitness | Premium Gym & Training in India",
    template: "%s | Golden Fitness"
  },
  description: "Join Golden Fitness for a premium gym experience. Personal training, group classes, and top-tier equipment. Best gym in India.",
  keywords: ["Gym", "Fitness", "India", "Bodybuilding", "Weight Loss", "Golden Fitness", "Premium Gym"],
  openGraph: {
    title: "Golden Fitness | Premium Gym & Training in India",
    description: "Join the best gym in India. Transform your body with top-tier equipment and expert trainers.",
    url: "https://golden-fitness-gym.vercel.app",
    siteName: "Golden Fitness",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
