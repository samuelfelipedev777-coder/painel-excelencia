"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import IntroHeader from "../components/IntroHeader";
import axios from "axios";
import { useRouter } from "next/navigation";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [isRegister, setIsRegister] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isRegister && senha !== confirmSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      const res = await axios.post(
        isRegister ? "http://127.0.0.1:8000/register" : "http://127.0.0.1:8000/login",
        isRegister ? { nome, email, senha } : { email, senha }
      );

      alert(res.data.mensagem);

      if (!isRegister && res.status === 200) {
        localStorage.setItem("userName", res.data.nome);
        router.push("/dashboard");
      }

      // Limpar campos
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmSenha("");
    } catch (err: any) {
      alert(err.response?.data?.detail || "Erro desconhecido");
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 150%, #CE633A 0%, #CE633A 30%, #2C4973 70%, #000000 100%)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <IntroHeader />
      <motion.div
        className="flex flex-col md:flex-row justify-center items-start max-w-7xl mx-auto px-4 py-8 md:py-16 gap-8 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-full md:w-1/2 space-y-8 order-2 md:order-1" variants={itemVariants}>
          <motion.button
            className="block mx-auto px-6 py-3 bg-transparent border-b-2 border-[#CE633A] text-white font-semibold rounded-full shadow-lg hover:shadow-[#CE633A]/25 transition-colors cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar Agora
          </motion.button>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center"
            variants={itemVariants}
          >
            Bem-vindo ao Painel Excelência
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 text-center max-w-md mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Acompanhe métricas, tome decisões inteligentes e transforme dados em resultados.
          </motion.p>

          <motion.ul className="space-y-4" variants={itemVariants}>
            <li className="flex items-center text-white">
              <svg className="w-5 h-5 text-[#CE633A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Acesso rápido e intuitivo às suas ferramentas.</span>
            </li>
            <li className="flex items-center text-white">
              <svg className="w-5 h-5 text-[#CE633A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Design responsivo e otimizado para performance.</span>
            </li>
            <li className="flex items-center text-white">
              <svg className="w-5 h-5 text-[#CE633A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Segurança e suporte constante para você.</span>
            </li>
          </motion.ul>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-xl border border-[#CE633A]/40 p-6 shadow-lg"
            variants={itemVariants}
          >
            <blockquote className="text-gray-200 italic text-center font-serif text-lg">
              “Excelência não é um ato, mas um hábito diário.”
            </blockquote>
            <div className="flex items-center justify-center mt-4 space-x-4">
              <Image
                src="/Samuel.png"
                alt="Foto de Perfil"
                width={80}
                height={80}
                className="rounded-full object-cover border-2 border-[#CE633A]"
              />
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-bold text-[#FF875A]">Samuel Felipe</h3>
                <p className="text-sm text-gray-300">Desenvolvedor Junior / Estudante</p>
                <p className="text-sm text-gray-300">Programador Full Stack / Aprendiz Excelência Comercial</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="w-full md:w-1/2 order-1 md:order-2 mt-8 md:mt-16" variants={itemVariants}>
          <motion.div
            className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-2xl max-w-md mx-auto border border-[#2C4973]/30"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-6">
              <Image
                src="/Login.png"
                alt="Logo da Empresa"
                width={0}
                height={0}
                sizes="(max-width: 768px) 150px, 250px"
                className="mx-auto mb-4 w-40 h-40 md:w-60 md:h-60 object-contain rounded-full"
              />
              <h2 className="text-2xl font-bold text-[#2C4973]">
                Área de {isRegister ? "Cadastro" : "Login"}
              </h2>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {isRegister && (
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE633A] focus:border-transparent"
                />
              )}
              <input
                type="email"
                placeholder="Seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE633A] focus:border-transparent"
              />
              <input
                type="password"
                placeholder="Sua Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE633A] focus:border-transparent"
              />
              {isRegister && (
                <input
                  type="password"
                  placeholder="Confirmar Senha"
                  value={confirmSenha}
                  onChange={(e) => setConfirmSenha(e.target.value)}
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE633A] focus:border-transparent"
                />
              )}

              <div className="flex justify-between pt-4">
                <motion.button
                  type="button"
                  onClick={() => setIsRegister(!isRegister)}
                  className="w-[48%] bg-[#CE633A] text-white font-semibold py-2 rounded-lg hover:bg-[#b5522d] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isRegister ? "Cancelar" : "Criar Conta"}
                </motion.button>

                <motion.button
                  type="submit"
                  className="w-[48%] bg-[#2C4973] text-white font-semibold py-2 rounded-lg hover:bg-[#1e3556] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isRegister ? "Cadastrar" : "Login"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;