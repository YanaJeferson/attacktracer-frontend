import { Terminal } from "lucide-react";
import React from "react";

const Footer = () => {
  const footerLinks = [
    { href: "#", text: "DOCUMENTACIÓN" },
    { href: "#", text: "CONTRIBUIR" },
    { href: "#", text: "LICENCIA" },
    { href: "#", text: "SEGURIDAD" },
  ];

  return (
    <footer className=" border-t border-green-500/30 h-40 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Terminal className="h-5 w-5 text-green-500" />
            <span className="text-lg font-mono font-bold tracking-tight">
              AttackTracer
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-green-400 hover:text-green-300 transition-colors font-mono text-xs"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-500/10 text-center text-green-400/60 font-mono text-xs">
          <p>AttackTracer © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
