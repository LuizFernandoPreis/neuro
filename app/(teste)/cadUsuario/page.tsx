"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const form = document.getElementById("userForm");

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      const nome = (document.getElementById("nome") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement)
        .value;
      const senha = (document.getElementById("senha") as HTMLInputElement)
        .value;

      try {
        const response = await fetch(
          "http://localhost:3000/api/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, email, senha }),
          },
        );

        const dataResponse = await response.json();
        console.log(dataResponse);

        // Navegar para a página de login
        router.push("/login");
      } catch (error) {
        console.error("Erro ao cadastrar o usuário:", error);
        alert("Erro ao cadastrar o usuário");
      }
    };

    form?.addEventListener("submit", handleSubmit);

    return () => {
      form?.removeEventListener("submit", handleSubmit);
    };
  }, [router]); // Dependência de `router` para garantir que a referência seja atualizada

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg md:shadow-lg w-full md:my-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
          <form id="userForm">
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite seu email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="senha"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite sua senha"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Cadastrar
              </button>
              <a href="/login" className="text-blue-500">
                Já Possuo Conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
