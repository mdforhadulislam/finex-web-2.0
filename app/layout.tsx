import FooterBar from "@/components/FooterBar/FooterBar";
import Navbar from "@/components/NavBar/NavBar";
import { Toaster } from "@/components/ui/sonner";
import AuthContextProvider from "@/context/AuthContext";
import LangContextProvider from "@/context/LangContext";
import LoadContextProvider from "@/context/LoadContext";
import UserTrackContext from "@/context/UserTrackContext";
import Spriner from "@/utils/Spriner";
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
            <AuthContextProvider>
              <UserTrackContext>
                <Navbar />
                <Spriner />
                {children}
                <FooterBar />
                <Toaster
                  position="top-right"
                  className="mt-12"
                  closeButton={true}
                  expand={true}
                />
              </UserTrackContext>
            </AuthContextProvider>
          </LoadContextProvider>
        </LangContextProvider>
      </body>
    </html>
  );
}
