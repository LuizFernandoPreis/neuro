"use client";
import Navbar from "./(components)/Navbar";
import Principal from "./(components)/Home";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {});

  return (
    <>
      <Principal />
    </>
  );
}
