"use client";

import IntroHeader from "../components/IntroHeader";
import MessageBox from "../components/MessageBox";

export default function IntroPanel() {
  return (
    <>
      <IntroHeader />

      <div
        className="min-h-screen flex flex-col items-center justify-start pt-24 md:pt-36 lg:pt-45 text-center px-4 md:px-0"
        style={{
          background: `radial-gradient(circle at 50% 150%, #CE633A 0%, #CE633A 35%, #CE633A 35%, #2C4973 65%, #000000 100%)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mb-10 flex flex-col items-center gap-3 max-w-full">
          <h1 className="flex flex-wrap justify-center items-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold gap-1 md:gap-2 leading-tight">
            Painel Excelência Uau
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-base max-w-lg mx-auto leading-snug">
            Tenha visão completa, organize ferramentas e tome decisões estratégicas.
          </p>
        </div>

        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <MessageBox />
        </div>
      </div>
    </>
  );
}