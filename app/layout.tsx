"use client"; // Layout là client component

import  React from "react";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <html lang="vi">
      <body className={inter.className}>
         {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
