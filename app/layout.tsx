import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./(teste)/(components)/Navbar"
import Footer from "./(teste)/(components)/Footer"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuroNavigator",
  description: "Sistema para gerênciamento de tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen">
      <header>
        <Navbar/>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
        </body>
    </html>
  );
}
