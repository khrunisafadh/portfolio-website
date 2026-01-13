import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khoirunnisa Fadilah | Backend Developer & System Analyst",
  description: "Information Systems student specializing in backend development, system analysis, and full-stack solutions.",
  keywords: ["Backend Developer", "System Analyst", "Full Stack", "Laravel", "PHP", "Portfolio"],
  authors: [{ name: "Khoirunnisa Fadilah" }],
  openGraph: {
    title: "Khoirunnisa Fadilah | Backend Developer",
    description: "Portfolio of Information Systems student specializing in backend development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}