"use client";
import { useEffect } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    const form = document.getElementById("userForm");

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      const email = (document.getElementById("email") as HTMLInputElement)
        .value;
      const senha = (document.getElementById("senha") as HTMLInputElement)
        .value;
      try {
        const response = await fetch(
          "https://c5fa41fd-e191-4b09-b021-0a2ca3cb6e42-00-fps6efufc4y5.janeway.replit.dev/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, senha }),
          },
        );

        if (!response.ok) {
          throw new Error("Credenciais inválidas. Tente novamente.");
        }

        const dataResponse = await response.json();
        console.log(dataResponse);

        await setCookie(null, "token", dataResponse.user.id, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        router.push("/");
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
      }
    };

    form?.addEventListener("submit", handleSubmit);

    return () => {
      form?.removeEventListener("submit", handleSubmit);
    };
  }, []);
  const cookies = parseCookies();
  cookies.token ? router.push("/") : {};
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="bg-white md:bg-opacity-50 bg-opacity-0 p-8 rounded-lg md:shadow-lg w-full my-auto md:max-w-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form id="userForm">
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
              ></input>
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
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <a href="/cadUsuario" className="text-blue-500">
                Cadastre-se
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
