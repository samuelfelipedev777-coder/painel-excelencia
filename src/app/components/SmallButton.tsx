import React from "react";
import { FiArrowUp } from "react-icons/fi";

interface SmallButtonProps {
  onClick?: () => void;
}

const SmallButton: React.FC<SmallButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 w-12 h-12 rounded-full bg-white flex items-center justify-center
                 shadow-md hover:shadow-lg transition-all duration-300 text-[#161618] cursor-pointer
                 hover:bg-gray-300 scale-105"
    >
      <FiArrowUp
        className="w-5 h-5 transform rotate-45"
      />
    </button>
  );
};

export default SmallButton;