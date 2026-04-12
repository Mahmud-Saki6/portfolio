import { Inter } from "next/font/google";
import ParticleTrail from "@/components/ParticleTrail";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Mahmud Sakib | Portfolio",
  description:
    "Frontend developer portfolio — React, Next.js, and modern web development.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ParticleTrail />
        <div className="relative z-[1] min-h-screen">{children}</div>
      </body>
    </html>
  );
}
