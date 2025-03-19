import { Button } from "@/components/ui/button";
import { Menu, Terminal } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "#dashboard", label: "DASHBOARD" },
  { href: "#features", label: "FEATURES" },
  { href: "#docs", label: "DOCS" },
  { href: "https://github.com", label: "GITHUB" },
];

export const Header = () => (
  <header className="border-b border-green-500/30 h-12 flex items-center px-4 md:px-0">
    <div className="container mx-auto flex justify-between items-center">

      {/*desktop*/}
      <div className="flex items-center gap-2">
        <Terminal className="h-6 w-6 text-green-500" />
        <span className="text-xl font-mono font-bold tracking-tight">
          AttackTracer
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Button
        className="border-green-500 text-green-500 hover:bg-green-500/10 bg-transparent hidden md:block"
      >
        <a href="/login">INICIAR SESIÓN</a>
      </Button>

      {/*mobile*/}
      <Sheet>
        <SheetTrigger className="md:hidden flex">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center gap-2">
                <Terminal className="h-6 w-6 text-green-500" />
                <span className="text-xl font-mono font-bold tracking-tight">
                  AttackTracer
                </span>
              </div>
            </SheetTitle>
            <nav className="flex flex-col items-center gap-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button
              className="border-green-500  hover:bg-green-500/10  flex md:hidden justify-center"
            >
              <a href="/login">INICIAR SESIÓN</a>
            </Button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  </header>
);
