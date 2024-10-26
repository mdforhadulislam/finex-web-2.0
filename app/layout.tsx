import FooterBar from "@/components/FooterBar/FooterBar";
import Navbar from "@/components/NavBar/NavBar";
import LangContextProvider from "@/context/LangContext";
import LoadContextProvider from "@/context/LoadContext";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Finex - Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LangContextProvider>
          <LoadContextProvider>
            <Navbar />
            {children}
            <FooterBar />
            <Toaster position="top-right" className="mt-14" closeButton={true}  />
          </LoadContextProvider>
        </LangContextProvider>
      </body>
    </html>
  );
}
