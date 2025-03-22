"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, AlertTriangle, Terminal, Clock, Activity } from "lucide-react"
import { knownMaliciousIPs, SecurityEvent, securityEvents, systemStats, threatSummary, attacksByCountry } from "../data/security-data"

const MAX_LOG_ENTRIES = 40
const UPDATE_INTERVAL = 1000
const NEW_EVENT_PROBABILITY = 0.3

const TerminalConsole = () => {
  const [time, setTime] = useState(new Date())
  const [activeTab, setActiveTab] = useState<"monitor" | "threats">("monitor")
  const [logEntries, setLogEntries] = useState<SecurityEvent[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)

  const generateRealisticIP = () => 
    Math.random() > 0.7
      ? knownMaliciousIPs[Math.floor(Math.random() * knownMaliciousIPs.length)]
      : Array.from({ length: 4 }, () => Math.floor(Math.random() * 255)).join(".")

  const getRandomEvent = (): SecurityEvent => {
    const event = securityEvents[Math.floor(Math.random() * securityEvents.length)]
    const ip = generateRealisticIP()
    return {
      timestamp: new Date(time.getTime() - Math.floor(Math.random() * 60000))
        .toISOString()
        .replace("T", " ")
        .substring(0, 23),
      ip,
      type: event.type,
      category: event.category,
      message: event.message(ip),
      details: event.details(),
    }
  }

  useEffect(() => {
    // Auto-scroll
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight)
  }, [logEntries])

  useEffect(() => {
    // Initialize logs
    setLogEntries(Array.from({ length: 15 }, getRandomEvent))

    // Update timer
    const timer = setInterval(() => {
      setTime(new Date())
      if (Math.random() > NEW_EVENT_PROBABILITY) {
        setLogEntries(prev => [...prev.slice(-MAX_LOG_ENTRIES), getRandomEvent()])
      }
    }, UPDATE_INTERVAL)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hidden lg:block w-1/2 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0e0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0e0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="w-full max-w-2xl bg-[#0a0e0a] border border-green-500/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          {/* Terminal header */}
          <div className="bg-black p-2 border-b border-green-500/30 flex items-center">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto font-mono text-xs text-green-300 flex items-center gap-2">
              <Terminal size={12} />
              <span>ATTACKTRACER v3.4.2</span>
              <span className="text-green-500/50">|</span>
              <Clock size={12} />
              <span>{time.toLocaleTimeString()}</span>
              <span className="text-green-500/50">|</span>
            </div>
          </div>

          {/* Terminal tabs */}
          <div className="bg-black/80 border-b border-green-500/30 flex text-xs font-mono">
            <button
              className={`px-4 py-1.5 ${activeTab === "monitor" ? "bg-green-500/20 text-green-400" : "text-green-300/70 hover:bg-green-500/10"}`}
              onClick={() => setActiveTab("monitor")}
            >
              <span className="flex items-center gap-1">
                <Activity size={12} />
                MONITOR
              </span>
            </button>
            <button
              className={`px-4 py-1.5 ${activeTab === "threats" ? "bg-green-500/20 text-green-400" : "text-green-300/70 hover:bg-green-500/10"}`}
              onClick={() => setActiveTab("threats")}
            >
              <span className="flex items-center gap-1">
                <AlertTriangle size={12} />
                THREATS
              </span>
            </button>
          </div>

          {/* Terminal content */}
          <div
            ref={terminalRef}
            className="p-4 font-mono text-sm h-96 overflow-auto scrollbar-thin scrollbar-thumb-green-500/30 scrollbar-track-black/30 hover:scrollbar-thumb-green-500/50"
          >
            {activeTab === "monitor" && (
              <div>
                <div className="flex items-center gap-2 mb-3 text-green-400 border-b border-green-500/20 pb-2">
                  <Shield size={16} />
                  <span className="font-bold">LIVE SECURITY MONITOR</span>
                  <span className="ml-auto text-xs bg-green-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    ACTIVE
                  </span>
                </div>

                <div className="mb-3 text-xs flex items-center justify-between text-gray-400">
                  <span>Timestamp</span>
                  <span>Source IP</span>
                  <span>Event</span>
                </div>

                {logEntries.map((entry, index) => (
                  <div key={index} className="mb-2 text-xs">
                    <div
                      className={`
                      ${entry.type === "critical" ? "text-red-400" : ""}
                      ${entry.type === "warning" ? "text-yellow-400" : ""}
                      ${entry.type === "info" ? "text-gray-400" : ""}
                      ${entry.type === "success" ? "text-green-400" : ""}
                      flex items-start justify-between
                    `}
                    >
                      <span className="font-mono">{entry.timestamp}</span>
                      <span className="font-mono">{entry.ip || "-"}</span>
                      <span className="font-mono text-right max-w-[200px] truncate">{entry.message}</span>
                    </div>
                    <div className="pl-4 text-gray-500 mt-0.5 text-[10px]">{entry.details}</div>
                  </div>
                ))}

                <div className="flex items-center mt-4 text-green-300 border-t border-green-500/20 pt-2">
                  <div className="flex-1 h-1 bg-black/50 rounded overflow-hidden">
                    <div
                      className="h-full bg-green-500 animate-pulse"
                      style={{ width: `${systemStats.cpuUsage}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs">System load: {systemStats.cpuUsage}%</span>
                </div>

                <p className="text-white mt-2 flex items-center gap-2 text-xs">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Monitoring active... <span className="text-green-300 animate-pulse">_</span>
                </p>
              </div>
            )}

            {activeTab === "threats" && (
              <div>
                <div className="flex items-center gap-2 mb-3 text-green-400 border-b border-green-500/20 pb-2">
                  <AlertTriangle size={16} />
                  <span className="font-bold">THREAT ANALYSIS</span>
                  <span className="ml-auto text-xs">Last 24 hours</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-red-400 flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                      Critical Threats
                    </p>
                    <span className="text-red-400 font-bold">
                      {threatSummary.ddos + threatSummary.malware + threatSummary.sqlInjection}
                    </span>
                  </div>

                  <div className="bg-black/30 p-2 rounded border border-red-500/20 mb-3">
                    <p className="text-white mb-1 text-xs flex justify-between">
                      <span>DDoS Attacks</span>
                      <span className="text-red-400">{threatSummary.ddos}</span>
                    </p>
                    <p className="text-white mb-1 text-xs flex justify-between">
                      <span>Malware Detected</span>
                      <span className="text-red-400">{threatSummary.malware}</span>
                    </p>
                    <p className="text-white text-xs flex justify-between">
                      <span>SQL Injection</span>
                      <span className="text-red-400">{threatSummary.sqlInjection}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-yellow-400 flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
                      Warnings
                    </p>
                    <span className="text-yellow-400 font-bold">
                      {threatSummary.bruteForce + threatSummary.portScans + threatSummary.phishing + threatSummary.xss}
                    </span>
                  </div>

                  <div className="bg-black/30 p-2 rounded border border-yellow-500/20 mb-3">
                    <p className="text-white mb-1 text-xs flex justify-between">
                      <span>Brute Force Attempts</span>
                      <span className="text-yellow-400">{threatSummary.bruteForce}</span>
                    </p>
                    <p className="text-white mb-1 text-xs flex justify-between">
                      <span>Port Scanning</span>
                      <span className="text-yellow-400">{threatSummary.portScans}</span>
                    </p>
                    <p className="text-white mb-1 text-xs flex justify-between">
                      <span>Phishing Attempts</span>
                      <span className="text-yellow-400">{threatSummary.phishing}</span>
                    </p>
                    <p className="text-white text-xs flex justify-between">
                      <span>XSS Attempts</span>
                      <span className="text-yellow-400">{threatSummary.xss}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-green-400 flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      Informational
                    </p>
                    <span className="text-green-400 font-bold">{threatSummary.anomalies}</span>
                  </div>

                  <div className="bg-black/30 p-2 rounded border border-green-500/20">
                    <p className="text-white text-xs flex justify-between">
                      <span>Traffic Anomalies</span>
                      <span className="text-green-400">{threatSummary.anomalies}</span>
                    </p>
                  </div>
                </div>

                <div className="text-xs text-white bg-black/30 p-2 rounded border border-green-500/20">
                  <p className="text-green-300 mb-1">Attack Sources:</p>
                  <div className="space-y-1">
                    {attacksByCountry.map((country, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-24">{country.country}</span>
                        <div className="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden mx-2">
                          <div className="h-full bg-green-500/70" style={{ width: `${country.percentage}%` }}></div>
                        </div>
                        <span className="text-gray-400">{country.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalConsole

