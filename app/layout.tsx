import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "Ayesha Nahalage — Health Information & Communication Technology",
  description:
    "Portfolio of Ayesha Nahalage — Health Information & Communication Technology undergraduate, frontend developer, healthcare technology enthusiast.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ayesha Nahalage — Portfolio",
    description:
      "Health Information & Communication Technology undergraduate and frontend developer.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeProvider>
          <Loader />
          <div className="pointer-events-none fixed inset-0 -z-30 bg-bg0 transition-colors duration-500" />
          <div
            className="pointer-events-none fixed inset-0 -z-30 transition-colors duration-500"
            style={{
              background:
                "radial-gradient(circle at 15% 20%, rgba(124,92,255,.20), transparent 45%), radial-gradient(circle at 85% 15%, rgba(51,242,194,.10), transparent 40%), radial-gradient(circle at 50% 90%, rgba(124,92,255,.14), transparent 50%)"
            }}
          />
          <ParticlesBackground />
          <CustomCursor />
          <ScrollProgress />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
