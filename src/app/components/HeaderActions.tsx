"use client";

import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderActions() {
  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex items-center gap-5 relative">
      <div className="relative">
        <FiSettings
          onClick={() => {
            setShowSettings(!showSettings);
            setShowNotifications(false);
          }}
          className="w-6 h-6 cursor-pointer hover:text-[#F29F58] transition"
        />
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 rounded-lg shadow-xl backdrop-blur-md border bg-[#1e1e1f]/90 border-[#3a3a3c]"
            >
              <ul className="text-sm divide-y divide-gray-400/20">
                <li className="p-3 hover:bg-[#F29F58]/50 cursor-pointer">Preferências</li>
                <li className="p-3 hover:bg-[#F29F58]/50 cursor-pointer">Conta</li>
                <li className="p-3 hover:bg-[#F29F58]/50 cursor-pointer text-red-400">Sair</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative">
        <IoMdNotificationsOutline
          onClick={() => {
            setShowNotifications(!showNotifications);
            setShowSettings(false);
          }}
          className="w-6 h-6 cursor-pointer hover:text-[#F29F58] transition"
        />
        <AnimatePresence>
          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-72 rounded-lg shadow-xl backdrop-blur-md border bg-[#1e1e1f]/90 border-[#3a3a3c] overflow-hidden"
            >
              <div className="p-3 border-b bg-[#EBEDF0] text-black border-gray-400/20 font-semibold">Notificações</div>
              <ul className="text-sm max-h-64 overflow-y-auto">
                {["Nova proposta aprovada", "Relatório disponível", "Meta alcançada 🎉"].map((msg, i) => (
                  <li key={i} className="p-3 bg-[#EBEDF0] hover:bg-[#F29F58]/50 border-b border-gray-400/10 cursor-pointer">
                    {msg}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}