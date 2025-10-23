import React from 'react';

function Button() {
  return (
    <button
      className="relative w-60 py-2 px-4 border border-[#424244] rounded-full 
      text-gray-200 bg-transparent font-medium cursor-pointer
      transition-all duration-500 ease-out overflow-hidden
      hover:border-[#F29F58] hover:text-white hover:shadow-[0_0_12px_#F29F5860]
      hover:-translate-y-[2px] active:scale-[0.98] group"
    >
      <span className="relative z-10">Ver detalhes</span>

      {/* Efeito de brilho sutil passando */}
      <span
        className="absolute top-0 left-[-100%] w-full h-full 
        bg-gradient-to-r from-transparent via-[#F29F58]/60 to-transparent
        transition-all duration-[900ms] ease-out
        group-hover:left-[100%]"
      />
    </button>
  );
}

export default Button;