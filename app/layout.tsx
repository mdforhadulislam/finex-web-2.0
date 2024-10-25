import FooterBar from "@/components/FooterBar/FooterBar";
import Navbar from "@/components/NavBar/NavBar";
import type { Metadata } from "next";
import "./globals.css";
import LangContextProvider from "@/context/LangContext";
import LoadContextProvider from "@/context/LoadContext";
import { ContextMenu, ContextMenuTrigger } from "@radix-ui/react-context-menu";

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
        {/* <ContextMenu>
          <ContextMenuTrigger> */}
            <LangContextProvider>
              <LoadContextProvider>
                <Navbar />
                {children}
                <FooterBar />
              </LoadContextProvider>
            </LangContextProvider>
          {/* </ContextMenuTrigger> */}
        {/* </ContextMenu> */}
      </body>
    </html>
  );
}
