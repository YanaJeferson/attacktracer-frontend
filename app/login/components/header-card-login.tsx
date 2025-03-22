import { Terminal } from "lucide-react";
import React from "react";

interface HeaderCardLoginProps {
  title?: string;
  descripttion: string;
}

const HeaderCardLogin: React.FC<HeaderCardLoginProps> = ({
  title,descripttion
}) => {
  return (
    <div className="mb-8">
      <a href="#" className="flex items-center gap-2 mb-8">
        <Terminal className="h-5 w-5 text-green-500" />
        <span className="text-lg font-mono font-bold tracking-tight">
          attack<span className="text-white">tracer</span>
        </span>
      </a>

      <div className="bg-black border border-green-500/30 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-2 text-xs">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>SISTEMA SEGURO</span>
        </div>
        <div className="font-mono text-xs">
          <p className="mb-1 text-green-300">
            {">"} Verificando conexión segura...
          </p>
          <p className="mb-1 text-green-300">{">"} TLS 1.3 establecido</p>
          <p className="text-white">{">"} Autenticación requerida</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-2 font-mono text-white">{title}</h1>
      <p className="text-green-400 font-mono text-sm">
        {descripttion}
      </p>
    </div>
  );
};

export default HeaderCardLogin;
