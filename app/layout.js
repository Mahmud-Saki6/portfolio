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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Favicon with cache buster - forces browser to load fresh */}
        <link rel="icon" type="image/png" href="/images/logo.png?v=2" />
        <link rel="shortcut icon" href="/images/logo.png?v=2" />
        <link rel="apple-touch-icon" href="/images/logo.png?v=2" />
      </head>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ParticleTrail />
        <div className="relative z-[1] min-h-screen">{children}</div>
      </body>
    </html>
  );
}