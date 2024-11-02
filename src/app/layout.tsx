import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "./AuthProvider";
import { Roboto } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Realitní leady",
  description: "Realitní leady pro makléře",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" className="{roboto.className}">
        <body className="flex flex-col min-h-screen ">
          <NavBar></NavBar>
          <main className=" flex-grow container   min-w-full bg-slate-100">
            {children}
          </main>
          <Footer></Footer>
        </body>
      </html>
    </AuthProvider>
  );
}
