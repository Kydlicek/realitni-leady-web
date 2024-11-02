import "./globals.css";
import type { Metadata } from "next";

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
  title: "Subtitle Maker",
  description: "Kinde with NextJS App Router",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="min-h-screen">
        <NavBar></NavBar>
        <main className="bg-slate-50 ">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
