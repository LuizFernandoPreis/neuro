"use client";
import Navbar from "./(components)/Navbar";
import Principal from "./(components)/Home";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  const [carregou, carregar] = useState(false);
  const router = useRouter();

  if (!carregou) {
    carregar(true);
    router.refresh();
  }

  return (
    <>
      <Principal />
    </>
  );
}
