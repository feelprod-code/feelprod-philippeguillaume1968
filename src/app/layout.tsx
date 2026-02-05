import type { Metadata } from "next";
import { Inter, Bangers, Montserrat, Permanent_Marker, Luckiest_Guy, Chewy } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bangers = Bangers({ weight: "400", subsets: ["latin"], variable: "--font-bangers" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-permanent-marker" });
const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"], variable: "--font-luckiest-guy" });
const chewy = Chewy({ weight: "400", subsets: ["latin"], variable: "--font-chewy" });

export const metadata: Metadata = {
  title: "FeelProd | Créateur d'Émotions Visuelles",
  description: "Portfolio immersif de production audiovisuelle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bangers.variable} ${montserrat.variable} ${permanentMarker.variable} ${luckiestGuy.variable} ${chewy.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
