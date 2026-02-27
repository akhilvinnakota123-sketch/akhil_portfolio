import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Akhil Vinnakota — Product Developer & MBA Candidate",
  description:
    "Portfolio of Akhil Vinnakota — MBA candidate and Software Engineer at Amadeus with expertise in AI-driven products, GenAI automation, and scalable engineering.",
  keywords: [
    "Akhil Vinnakota",
    "Product Developer",
    "Software Engineer",
    "AI",
    "Amadeus",
    "MBA",
    "GenAI",
    "Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
