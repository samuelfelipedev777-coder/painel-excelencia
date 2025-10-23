"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { FiArrowUp, FiSun, FiMoon } from "react-icons/fi";
import Button from "../../components/Button";
import Image from "next/image";
import SmallButton from "../../components/SmallButton";
import MapBrasil from "../../components/MapBrasil ";
import HeaderActions from "../../components/HeaderActions";

export default function Dashboard() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";

  return (
    <div className="flex min-h-screen relative">
      <Sidebar />
      <div
        className={`flex-1 flex flex-col relative transition-colors duration-500 ${
          isDark ? "bg-[#161618]" : "bg-[#f8f8f8] text-gray-800"
        }`}
      >
        <header
          className={`z-50 flex justify-between items-center px-6 py-4 border-b rounded-4xl backdrop-blur-md transition-colors duration-500 ${
            isDark ? "bg-[#161618]/80 border-[#49494B]" : "bg-[#ffffff]/60 border-gray-300 text-gray-800"
          }`}
        >
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="hover:text-[#F29F58] transition cursor-pointer"
              title={isDark ? "Tema claro" : "Tema escuro"}
            >
              {isDark ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
            </button>
            <HeaderActions />
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-6 gap-4 flex-1 p-6 relative z-20">
          <div
            className={`relative border-[2px] shadow-lg p-6 rounded-lg md:col-span-3 md:row-span-2 overflow-hidden backdrop-blur-xl transition-colors duration-500 ${
              isDark ? "bg-[#2d2d2e]/60 border-[#424244]/70" : "bg-[#ffffff]/70 border-gray-300 text-gray-800"
            }`}
          >
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-90 pointer-events-none select-none">
              <Image src="/Circle pattern.png" width={160} height={160} alt="Decorative" className="object-contain w-80" />
            </div>
            <div className="flex flex-col gap-3 relative z-10">
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>Receita Total:</p>
              <h2 className="text-4xl font-semibold mb-1">R$ 350.000</h2>
              <p className="flex items-center">
                <FiArrowUp className="text-green-400 mr-1" />
                Meta Mensal: <span className="text-green-500 ml-1">90% alcançada</span>
              </p>
              <Button />
            </div>
          </div>

          <div
            className={`border-[2px] shadow-lg p-4 rounded-lg md:col-span-3 md:row-span-3 flex flex-col backdrop-blur-xl transition-colors duration-500 ${
              isDark ? "bg-[#2d2d2e]/60 border-[#424244]/70 text-white" : "bg-[#ffffff]/70 border-gray-300 text-gray-800"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Atividades Recentes</h2>
              <a href="#" className="text-sm text-[#F29F58] hover:underline transition">
                Marcar tudo como lido
              </a>
            </div>
            <div className="flex-1 overflow-y-auto">
              {[
                { user: "@Alberto", text: "Aprovou a proposta revisada enviada ao setor comercial", time: "30m atrás • gestão" },
                { user: "@Denise", text: "Atualizou a tabela de preços da planilha Base às 09:15h", time: "45m atrás • pricing" },
                { user: "@Fernanda", text: "Ajustou valores no orçamento para o cliente LesteTech", time: "3h atrás • pricing" },
                { user: "@Cleidir", text: "Finalizou um pré-acordo com a empresa X", time: "1h 30m atrás • acordos" },
                { user: "• Sistema", text: "Gerou relatório semanal de performance da equipe", time: "2h atrás • sistema" },
              ].map((item, index) => (
                <div key={index} className={`flex items-start gap-3 py-2 ${index !== 4 ? "border-b border-gray-400/30" : ""}`}>
                  <Image src="/Samuel.png" alt={item.user} width={50} height={50} className="object-cover rounded-full" />
                  <div className="flex flex-col">
                    <p>
                      <span className="font-semibold">{item.user}:</span> {item.text}
                    </p>
                    <span className="text-gray-400 text-sm mt-1">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:col-span-3 md:row-span-1">
            <div className="bg-[#F29F58] border border-[#333]/60 shadow-lg p-4 rounded-lg flex-1 min-h-[140px] flex flex-col justify-between gap-2 backdrop-blur-md relative overflow-hidden">
              <h2 className="text-lg font-semibold">Taxa de Conversão</h2>
              <p className="text-5xl">68%</p>
              <SmallButton onClick={() => console.log("Botão clicado!")} />
              <div className="absolute -right-10 -bottom-10 opacity-80 pointer-events-none select-none">
                <Image src="/White Circle pattern.png" alt="Decorative" width={170} height={170} className="object-contain" />
              </div>
            </div>

            <div
              className={`border-[2px] shadow-lg p-4 rounded-lg flex-1 min-h-[140px] flex flex-col justify-between backdrop-blur-md transition-colors duration-500 ${
                isDark ? "bg-[#2d2d2e]/60 border-[#424244]/70 text-white" : "bg-[#ffffff]/70 border-gray-300 text-gray-800"
              }`}
            >
              <h2 className="text-lg font-semibold">Propostas Enviadas</h2>
              <p className="text-5xl">
                27 <span className="text-4xl text-gray-400">/ semana</span>
              </p>
              <SmallButton onClick={() => console.log("Botão clicado!")} />
            </div>
          </div>

          <div
            className={`border-[2px] shadow-lg p-4 rounded-lg md:col-span-6 md:row-span-2 min-h-[260px] backdrop-blur-xl transition-colors duration-500 ${
              isDark ? "bg-[#2d2d2e]/60 border-[#424244]/70 text-white" : "bg-[#ffffff]/70 border-gray-300 text-gray-800"
            }`}
          >
            <h2 className="text-lg font-bold mb-1">Mapa Geográfico</h2>
            <p className="text-sm text-[#F29F58] mb-3">Outubro de 2025</p>
            <MapBrasil />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Área de Risco", "Performance de Vendas", "Setor Crítico", "Clientes Inativos", "Top Produtos", "Alta Oportunidade", "Redução de Mix"].map((item) => (
                <div key={item} className={`rounded-md p-3 text-center backdrop-blur-md ${isDark ? "bg-[#161618]/70" : "bg-gray-200/70"}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}