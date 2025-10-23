"use client";

import { FC } from "react";

interface LoadingSpinnerProps {
    isLoading: boolean;
    message?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ isLoading, message =  "Carregando..." }) => {
    if (!isLoading) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center space-y-4 p-4 bg-white/10 rounded-lg backdrop-blur-md border border-white/20 max-w-sm mx-4">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-gray-300 border-t-blue-500"></div>
          <div className="absolute inset-0 rounded-full h-12 w-12 border-2 border-blue-500/30 blur-sm animate-pulse"></div>
        </div>
        <p className="text-white text-lg font-medium text-center">{message}</p>
      </div>
    </div>
    );
};

export default LoadingSpinner;