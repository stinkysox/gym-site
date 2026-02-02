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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl), 
  title: {
    default: "Golden Fitness | Premium Gym & Training in India",
    template: "%s | Golden Fitness"
  },
  description: "Join Golden Fitness for a premium gym experience. Personal training, group classes, and top-tier equipment. Best gym in India.",
  keywords: ["Gym", "Fitness", "India", "Bodybuilding", "Weight Loss", "Golden Fitness", "Premium Gym"],
  openGraph: {
    title: "Golden Fitness | Premium Gym & Training in India",
    description: "Join the best gym in India. Transform your body with top-tier equipment and expert trainers.",
    url: baseUrl,
    siteName: "Golden Fitness",
    images: [
      {
        url: "https://i.pinimg.com/736x/c6/18/0e/c6180e8a76b01dd9adbe2536b2164a1d.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Fitness Gym Interior",
      },
    ],
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
