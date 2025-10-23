"use client";

import Image from "next/image";
import { useState, useTransition, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./Loading";

export default function IntroHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogoClick = () => {
    if (!mounted) return;
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      setMessage("Voltando para a página inicial...");
      setIsLoading(true);
      startTransition(() => {
        router.push("/");
        setIsLoading(false);
      });
    }
  };

  const handleGoToLogin = () => {
    if (!mounted) return;
    if (window.location.pathname === "/login") {
      window.location.reload();
    } else {
      setMessage("Indo para o login...");
      setIsLoading(true);
      startTransition(() => {
        router.push("/login");
        setIsLoading(false);
      });
    }
  };

  return (
    <>
      <LoadingSpinner isLoading={isLoading || isPending} message={message} />

      <header className="fixed top-0 left-0 w-full h-20 z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6 h-full">
            <button onClick={handleLogoClick} className="focus:outline-none">
              <div className="relative w-48 h-40">
                <Image
                  src="/Originallogo1.png"
                  alt="Logo do Painel"
                  fill
                  sizes="(max-width: 768px) 200px, 400px"
                  className="object-contain cursor-pointer"
                  priority
                />
              </div>
            </button>
            <nav className="hidden md:flex gap-6 text-white font-medium h-full items-center">
              <a href="#inicio" className="hover:text-blue-300 transition">Início</a>
              <a href="#sobre" className="hover:text-blue-300 transition">Sobre</a>
              <a href="#servicos" className="hover:text-blue-300 transition">Serviços</a>
              <a href="#contato" className="hover:text-blue-300 transition">Contato</a>
            </nav>
          </div>

          <button
            onClick={handleGoToLogin}
            className="hidden md:block bg-[#527bc2] hover:bg-[#354B70] p-2 rounded-md text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || isPending}
          >
            {isLoading || isPending ? "Carregando..." : "Ir para o Login"}
          </button>

          <div className="md:hidden h-full flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none cursor-pointer"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/10 text-white flex flex-col items-start py-4 gap-2">
            <a href="#inicio" className="hover:text-blue-300 transition px-2">Início</a>
            <a href="#sobre" className="hover:text-blue-300 transition px-2">Sobre</a>
            <a href="#servicos" className="hover:text-blue-300 transition px-2">Serviços</a>
            <a href="#contato" className="hover:text-blue-300 transition px-2">Contato</a>

            <button
              onClick={handleGoToLogin}
              className="w-full bg-[#527bc2] hover:bg-[#354B70] p-2 rounded-md text-white mt-2"
              disabled={isLoading || isPending}
            >
              {isLoading || isPending ? "Carregando..." : "Ir para o Login"}
            </button>
          </nav>
        )}
      </header>
    </>
  );
}