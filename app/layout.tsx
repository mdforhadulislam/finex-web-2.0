import FooterBar from "@/components/FooterBar/FooterBar";
import Navbar from "@/components/NavBar/NavBar";
import LangContextProvider from "@/context/LangContext";
import LoadContextProvider from "@/context/LoadContext";
import type { Metadata } from "next";
import "./globals.css";

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
          </LoadContextProvider>
        </LangContextProvider>
      </body>
    </html>
  );
}
