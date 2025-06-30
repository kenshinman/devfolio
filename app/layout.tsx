import {Inter, Montserrat} from "next/font/google";
import "./globals.css";
import {Metadata} from "next";
import {profile} from "./data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Welcome to Kehinde's Portfolio",
  keywords: [
    "Portfolio",
    "Frontend Developer",
    "Kehinde's Portfolio",
    "Kehinde Orilogbon's Portfolio",
    "Kehinde Orilogbon",
    "Kehinde",
    "Orilogbon",
    "Orilogbon Kehinde",
    "Orilogbon Kehinde's Portfolio",
    "React developer based in Toronto",
    "Next.js developer based in Toronto",
    "React Native developer based in Toronto",
    "JavaScript developer based in Toronto",
    "TypeScript developer based in Toronto",
    "Tailwind CSS developer based in Toronto",
    "React Query developer based in Toronto",
    "Zustand developer based in Toronto",
    "Web Development based in Toronto",
    "UI/UX Design based in Toronto",
    "Mobile App Development based in Toronto",
    "React",
    "Next.js",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React Query",
  ],
  description: profile.summary,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.className} ${montserrat.className} 
        antialiased 
        leading-8 
        overflow-x-hidden 
        dark:bg-darkTheme
        dark:text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
