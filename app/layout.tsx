"use client";

import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import LoginLayout from "./loginLayout";
import Navbar from "./(teste)/(components)/Navbar";
import Footer from "./(teste)/(components)/Footer";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.token;

  const pathname = window.location.pathname;
  if (!token && pathname !== "/login" && pathname !== "/cadUsuario") {
    router.push("/cadUsuario");
  }

  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen">
        {token ? (
          <>
            <header>
              <Navbar />
            </header>
            <main className="flex-grow">{children}</main>
            <footer>
              <Footer />
            </footer>
          </>
        ) : (
          <LoginLayout>
            <main className="flex-grow">{children}</main>
          </LoginLayout>
        )}
      </body>
    </html>
  );
}
