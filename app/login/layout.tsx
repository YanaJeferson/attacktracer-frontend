import TerminalConsole from "./components/terminal-console"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-screen bg-[#0a0e0a] text-green-400 flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
      {children}
      <TerminalConsole/>
      </div>
    </div>
  )
}
