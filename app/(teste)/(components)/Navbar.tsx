"use client";
import React, { useState } from "react";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex items-center justify-between relative">
          <a href="/" className="flex items-center text-white">
            <img src="/logo.webp" alt="Logo" className="h-8 mr-2" />
            NeuroNavigator
          </a>
          <button
            onClick={toggleMenu}
            className="text-white lg:hidden"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div
            className={`lg:flex lg:flex-row-reverse lg:items-center lg:space-x-4 absolute bg-gray-900 lg:relative right-0 top-full z-10 mt-2 w-full origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbarNav"
          >
            <a
              href="/"
              className="block lg:inline-block text-gray-300 hover:text-white mt-4 lg:mt-0 px-4 py-2"
            >
              Página Principal
            </a>
            <a
              href="/cadtask"
              className="block lg:inline-block text-gray-300 hover:text-white mt-4 lg:mt-0 px-4 py-2"
            >
              Cadastrar Tarefa
            </a>
            <a
              href="/getTask"
              className="block lg:inline-block text-gray-300 hover:text-white mt-4 lg:mt-0 px-4 py-2"
            >
              Ver Tarefas
            </a>
            <a
              href="/calendario"
              className="block lg:inline-block text-gray-300 hover:text-white mt-4 lg:mt-0 px-4 py-2"
            >
              Meu Calendário
            </a>
            <a
              href="/login"
              onClick={() => {
                destroyCookie(null, "token");
              }}
              className="block lg:inline-block text-gray-300 hover:text-white mt-4 lg:mt-0 px-4 py-2"
            >
              Deslogar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
