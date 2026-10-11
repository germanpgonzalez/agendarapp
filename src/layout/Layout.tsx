import type React from "react";

type LayoutPros = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutPros) => {
  return (
    <div className="bg-fondo min-h-screen">
        
      <header className="flex h-[68px] items-center justify-between border-b px-10">
        <span className="text-lg text-bold">Turnos</span>
        <span>11/10/2026</span>
      </header>
      
      <main className="py-10 px-8">{children}</main>
    </div>
  );
};
