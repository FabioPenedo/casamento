"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Sucesso() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-white">
      <img src="/images/success.svg" alt="" loading="lazy" />
      <h1 className="text-3xl mt-5">Seu pagamento foi realizado com sucesso!</h1>
    </section>
  )
}