"use client";

import { useState } from "react";
import { 
  FiGrid, FiX, FiMonitor, FiPlay, FiCalendar, FiUser, 
  FiFileText, FiBell, FiUsers, FiHelpCircle, 
  FiTrendingUp, FiBarChart, FiLogOut 
} from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: FiMonitor, text: 'Cockpit 360' },
    { icon: FiPlay, text: 'Simulações' },
    { icon: FiCalendar, text: 'Calendario' },
    { icon: FiUser, text: 'Perfil' },
    { icon: FiFileText, text: 'Relatorios' },
    { icon: FiBell, text: 'Sujestões' },
    { icon: FiUsers, text: 'Area de membros' },
    { icon: FiHelpCircle, text: 'Suporte' },
    { icon: FiTrendingUp, text: 'Excelencia comercial' },
    { icon: FiBarChart, text: 'Graficos' },
  ];

  return (
    <div
      className={`h-screen flex flex-col rounded-r-3xl justify-between flex-shrink-0
        ${isOpen ? 'w-64 p-4' : 'w-16 p-5'}
        bg-white/5 backdrop-blur-md border-r border-white/20 shadow-lg
        transition-all duration-300`}
    >
      {/* Botão de abrir/fechar */}
      <div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-center w-full mb-4 text-white transition-all duration-300"
        >
          {isOpen ? <FiX className="h-6 w-6 cursor-pointer" /> : <FiGrid className="h-6 w-6 cursor-pointer" />}
        </button>

        {/* Menu principal */}
        <div className={isOpen ? '' : 'flex flex-col items-center cursor-pointer'}>
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 my-2 ${
                isOpen ? 'hover:bg-blue-400 rounded-sm p-2' : 'hover:text-red-300 text-center'
              } transition-all duration-200 cursor-pointer`}
            >
              <item.icon className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-gray-400 hover:text-white'}`} />
              {isOpen && <span className="text-white transition-opacity duration-300">{item.text}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Linha divisória */}
      <hr className="border-0 h-px bg-gradient-to-r from-transparent to-white/80 my-4" />

      {/* Infos e botões inferiores */}
      <div>
        {isOpen && (
          <div className="text-gray-300 mb-4 w-[70%] truncate">
            <p className="truncate">samuelfelipe.dev777@gmail.com</p>
            <p className="text-blue-300 text-sm">Samuel Felipe</p>
          </div>
        )}

        <div className={`flex ${isOpen ? 'flex-row gap-5 px-4' : 'flex-col items-center gap-3'} transition-all duration-300`}>
          <button 
            onClick={() => console.log('Sair')}
            className={`${
              isOpen
                ? 'flex items-center bg-red-500 w-30 px-2 py-1 rounded text-sm hover:bg-red-600'
                : 'flex items-center justify-center w-9 h-9 rounded-full bg-gray-500 hover:bg-gray-600'
            } transition-all duration-200 cursor-pointer`}
          >
            <FiLogOut className="h-4 w-4 mr-1" />
            {isOpen && <span>Sair</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;