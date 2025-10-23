"use client";

import { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import LoadingSpinner from "./Loading";

export default function MessageBox() {
  const [message, setMessage] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSend = () => {
    console.log("Mensagem enviada:", message);
    setMessage("");
  };

  const handleGoToPanel = () => {
    setIsLoading(true);

    startTransition(() => {
      router.push("/login");
    });
  };

  return (
    <>
      <LoadingSpinner 
        isLoading={isLoading || isPending} 
        message="Indo para o login..." 
      />

      <div className="flex justify-center items-center w-full">
        <div className="w-full md:min-w-[500px] lg:min-w-[700px] xl:min-w-[800px] bg-[#101010] text-white px-5 py-4 md:py-5 rounded-2xl shadow-lg flex flex-col gap-3 md:gap-4 relative">
          <div className="flex flex-col md:flex-row w-full items-center gap-2">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Digite suas dúvidas aqui ou fique à vontade para entrar no painel..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-[#101010] text-white border border-transparent focus:border-gray-700 transition-colors text-sm sm:text-base md:text-base"
              />
            </div>

            <button
              onClick={handleSend}
              className="text-blue-500 hover:text-blue-400 cursor-pointer mt-2 md:mt-0"
            >
              <HiPaperAirplane size={22} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-3 md:mt-4">
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition-colors cursor-pointer w-full md:w-auto text-sm sm:text-base">
              Info
            </button>
            
            <button
              onClick={handleGoToPanel}
              disabled={isLoading || isPending}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition-colors cursor-pointer w-full md:w-auto text-sm sm:text-base disabled:opacity-50"
            >
              {isLoading || isPending ? "Carregando..." : "Painel"}
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-2 mt-3 md:mt-4 items-center">
            <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#FFA17F] to-[#00223E] text-transparent bg-clip-text">
              *
            </span>
            <p className="text-sm sm:text-base md:text-lg text-justify font-extrabold bg-gradient-to-r from-[#FFA17F] to-[#00223E] text-transparent bg-clip-text">
              Use a barra de busca para tirar uma dúvida ou saiba mais.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}