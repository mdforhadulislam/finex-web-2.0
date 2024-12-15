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
  description: "Finex provides fast, reliable, and affordable international shipping solutions, specializing in air and sea freight, custom clearance, and competitive pricing.",
  keywords: "international shipping, affordable shipping solutions, air freight, sea freight, custom clearance, export rates, courier services in Surat, DHL rates comparison, FedEx shipping quotes, UPS shipping options, hassle-free logistics, professional shipping solutions, global shipping services, Surat logistics provider, fast delivery services, international export assistance, shipping quote comparison, reliable freight forwarding, express courier services, door-to-door shipping, efficient customs clearance, international package tracking, Surat freight services, cost-effective global logistics",
  icons:["/icon.png"]
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
