import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "./(home)/navbar";
import Footer from "./(home)/footer";

const getLato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Porsche model showcase",
  description: "Application that shows you Porsche models currently available",
  icons: {
    icon: "/porsche-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getLato.className} antialiased bg-[#EEEFF2]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
