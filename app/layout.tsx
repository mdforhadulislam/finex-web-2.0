import NavBar from "@/components/NavBar/NavBar";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Finex - Home",
  description: "Finex: Your go-to courier service for fast, reliable, and affordable international shipping. Explore our services, meet our team, and discover how we can assist with your shipping needs.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavBar />
        {children}
        <Toaster richColors theme={"light"} />
      </body>
    </html>
  );
}
