export const knownMaliciousIPs = [
  "185.142.236.34",
  "193.32.162.159",
  "45.134.144.219",
  "104.28.215.96",
  "91.240.118.168",
  "185.220.101.34",
  "89.248.167.131",
  "185.156.73.54",
  "194.26.29.156",
  "5.188.206.18"
] as const;

export const attackPatterns = [
  "SQL Injection attempt: ' OR 1=1 --",
  "XSS attempt: <script>alert(1)</script>",
  "Directory traversal: ../../../etc/passwd",
  "Command injection: ; cat /etc/passwd",
  "SSRF attempt: http://169.254.169.254/"
] as const;

export const securityEvents = [
  {
    type: "critical" as const,
    category: "ddos" as const,
    message: (ip: string) => `DDoS attack detected from ${ip}`,
    details: () => `Targeting port ${[53, 80, 443][Math.floor(Math.random() * 3)]}`,
  },
  {
    type: "critical" as const,
    category: "ransomware" as const,
    message: (ip: string) => `Ransomware signature detected from ${ip}`,
    details: () => `Attempting to encrypt system files`,
  },
  {
    type: "warning" as const,
    category: "bruteforce" as const,
    message: (ip: string) => `Brute force attack detected from ${ip}`,
    details: () => `Multiple failed login attempts`,
  },
  {
    type: "warning" as const,
    category: "portscan" as const,
    message: (ip: string) => `Port scanning detected from ${ip}`,
    details: () => `Scanning multiple system ports`,
  },
  {
    type: "info" as const,
    category: "injection" as const,
    message: (ip: string) => `Potential SQL injection from ${ip}`,
    details: () => `Malicious SQL patterns detected`,
  },
  {
    type: "success" as const,
    category: "rce" as const,
    message: (ip: string) => `Attack mitigated from ${ip}`,
    details: () => `Threat successfully blocked`,
  }
] as const;

export type SecurityEventType = "critical" | "warning" | "info" | "success";
export type SecurityEventCategory = "ddos" | "ransomware" | "injection" | "rce" | "bruteforce" | "portscan";

export interface SecurityEvent {
  timestamp: string;
  ip: string;
  type: SecurityEventType;
  category: SecurityEventCategory;
  message: string;
  details: string;
}

// System statistics
export const systemStats = {
  cpuUsage: Math.floor(Math.random() * 30) + 20,
};

// Threat summary data
export const threatSummary = {
  ddos: 23,
  bruteForce: 156,
  portScans: 89,
  malware: 12,
  phishing: 34,
  xss: 18,
  sqlInjection: 7,
  anomalies: 42,
};

// Attack sources by country
export const attacksByCountry = [
  { country: "🇨🇳 China", percentage: 34 },
  { country: "🇷🇺 Russia", percentage: 22 },
  { country: "🇺🇸 USA", percentage: 15 },
  { country: "🇰🇵 North Korea", percentage: 12 },
  { country: "🇮🇷 Iran", percentage: 8 },
  { country: "🇧🇷 Brazil", percentage: 5 },
  { country: "🇮🇳 India", percentage: 4 },
] as const;