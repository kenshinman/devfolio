import {Outfit, Ovo} from "next/font/google";
import "./globals.css";
import {Metadata} from "next";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Welcome to Joshua's Portfolio",
  keywords: [
    "Portfolio",
    "Frontend Developer",
    "Joshua's Portfolio",
    "React Native",
    "React",
    "Next.js",
    "JavaScript",
    "Web Development",
    "UI/UX Design",
    "Mobile App Development",
  ],
  description:
    "Welcome to Joshua's Portfolio, showcasing my skills as a Frontend Developer with expertise in React Native, React, Next.js, and JavaScript. Explore my projects and services in web and mobile app development, UI/UX design, and more.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} 
        antialiased 
        leading-8 
        owerflow-x-hidden 
        dark:bg-darkTheme
        dark:text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
