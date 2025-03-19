import { FeatureCard } from "@/components/features/home/feature-card";
import Footer from "@/components/features/home/footer";
import { Header } from "@/components/features/home/header";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Server, Terminal } from "lucide-react";
import { Database, Network, Cpu, Lock } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="flex-1">
        {/* Hero Section with Terminal Effect */}
        <section className="py-12 md:py-20 relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0e0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0e0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#0a0e0a] border border-green-500/30 rounded-lg p-4 mb-8 font-mono text-sm">
                <div className="flex items-center gap-2 mb-2 text-xs text-green-300">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>cyberwatch@terminal:~$</span>
                </div>
                <div className="typewriter">
                  <p className="mb-1">{">"} Iniciando sistema de monitoreo...</p>
                  <p className="mb-1">{">"} Conectando a la red global...</p>
                  <p className="mb-1">{">"} Analizando tráfico de datos...</p>
                  <p className="mb-1">{">"} Detectando amenazas en tiempo real...</p>
                  <p className="text-white">
                    {">"} Sistema <span className="text-green-500">CYBERWATCH</span> activado.
                  </p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono text-white">
                MONITOREO DE ATAQUES
                <br />
                <span className="text-green-500">EN TIEMPO REAL</span>
              </h1>
              <p className="text-lg text-green-300 mb-8 font-mono">
                Plataforma open-source para detectar, visualizar y analizar amenazas cibernéticas en tiempo real.
                Construida por la comunidad, para la comunidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-black font-mono text-sm">
                  DESPLEGAR AHORA
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500/10 font-mono text-sm"
                >
                  <Github className="mr-2 h-4 w-4" />
                  FORK EN GITHUB
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Dashboard Preview */}
        <section id="dashboard" className="py-16 bg-[#0a0e0a]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12 font-mono">
              <span className="text-white">DASHBOARD</span> <span className="text-green-500">PREVIEW</span>
            </h2>

            <div className="border border-green-500/30 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <div className="bg-black p-2 border-b border-green-500/30 flex items-center">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto font-mono text-xs text-green-300">CYBERWATCH DASHBOARD v1.0.2</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-green-500/20">
                <div className="bg-black p-4 md:col-span-2">
                  <div className="mb-2 font-mono text-xs text-green-300">MAPA GLOBAL DE ATAQUES</div>
                  <div className="aspect-[16/9] bg-[#0a0e0a] rounded border border-green-500/30 flex items-center justify-center">
                    <div className="relative w-full h-full overflow-hidden">
                      <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe className="h-16 w-16 text-green-500/50" />
                      </div>
                      {/* Simulated attack lines */}
                      <div className="absolute h-px w-20 bg-red-500/70 top-1/4 left-1/3 rotate-45 animate-pulse"></div>
                      <div className="absolute h-px w-32 bg-yellow-500/70 top-1/2 left-1/4 -rotate-12 animate-pulse"></div>
                      <div className="absolute h-px w-24 bg-green-500/70 bottom-1/3 right-1/3 rotate-30 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-black p-4 flex flex-col">
                  <div className="mb-2 font-mono text-xs text-green-300">ESTADÍSTICAS EN VIVO</div>
                  <div className="flex-1 bg-[#0a0e0a] rounded border border-green-500/30 p-3">
                    <div className="space-y-4 font-mono text-xs">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>ATAQUES DETECTADOS</span>
                          <span className="text-white">1,342</span>
                        </div>
                        <div className="w-full bg-black rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>DDOS</span>
                          <span className="text-white">487</span>
                        </div>
                        <div className="w-full bg-black rounded-full h-1.5">
                          <div className="bg-red-500 h-1.5 rounded-full w-1/3"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>BRUTE FORCE</span>
                          <span className="text-white">256</span>
                        </div>
                        <div className="w-full bg-black rounded-full h-1.5">
                          <div className="bg-yellow-500 h-1.5 rounded-full w-1/5"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>SQL INJECTION</span>
                          <span className="text-white">189</span>
                        </div>
                        <div className="w-full bg-black rounded-full h-1.5">
                          <div className="bg-purple-500 h-1.5 rounded-full w-1/6"></div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-green-500/20">
                        <div className="flex justify-between text-green-300">
                          <span>TIEMPO DE RESPUESTA</span>
                          <span>42ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black p-4">
                  <div className="mb-2 font-mono text-xs text-green-300">ALERTAS RECIENTES</div>
                  <div className="bg-[#0a0e0a] rounded border border-green-500/30 p-3 h-40 overflow-y-auto">
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <div className="text-red-400">[CRÍTICO] Ataque DDoS detectado</div>
                          <div className="text-gray-400">IP: 192.168.1.34 - 2 min ago</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <div className="text-yellow-400">[ALERTA] Múltiples intentos de login</div>
                          <div className="text-gray-400">Usuario: admin - 5 min ago</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <div className="text-green-400">[INFO] Firewall actualizado</div>
                          <div className="text-gray-400">v2.3.4 - 12 min ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black p-4 md:col-span-2">
                  <div className="mb-2 font-mono text-xs text-green-300">ACTIVIDAD DE RED</div>
                  <div className="bg-[#0a0e0a] rounded border border-green-500/30 p-3 h-40">
                    <div className="h-full flex items-end gap-1">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-green-500 w-full"
                          style={{
                            height: `${Math.max(5, Math.floor(Math.random() * 100))}%`,
                            opacity: 0.3 + Math.random() * 0.7,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-black relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0e0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0e0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-2xl font-bold text-center mb-12 font-mono">
              <span className="text-white">CARACTERÍSTICAS</span> <span className="text-green-500">TÉCNICAS</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FeatureCard
                icon={<Globe className="h-8 w-8 text-green-500" />}
                title="MAPA INTERACTIVO"
                description="Visualización geoespacial en tiempo real de ataques con trazado de rutas y análisis de origen-destino."
              />
              <FeatureCard
                icon={<Database className="h-8 w-8 text-green-500" />}
                title="ANÁLISIS DE DATOS"
                description="Procesamiento de big data con algoritmos de machine learning para detección de patrones anómalos."
              />
              <FeatureCard
                icon={<Server className="h-8 w-8 text-green-500" />}
                title="WEBSOCKETS"
                description="Comunicación bidireccional en tiempo real para alertas instantáneas y actualizaciones del dashboard."
              />
              <FeatureCard
                icon={<Network className="h-8 w-8 text-green-500" />}
                title="APIS INTEGRADAS"
                description="Conexión con Shodan, VirusTotal y Cloudflare Radar mediante APIs RESTful autenticadas."
              />
              <FeatureCard
                icon={<Cpu className="h-8 w-8 text-green-500" />}
                title="PROCESAMIENTO DISTRIBUIDO"
                description="Arquitectura escalable con procesamiento distribuido para análisis de grandes volúmenes de tráfico."
              />
              <FeatureCard
                icon={<Lock className="h-8 w-8 text-green-500" />}
                title="SEGURIDAD AVANZADA"
                description="Cifrado end-to-end, autenticación multifactor y auditoría de accesos para máxima seguridad."
              />
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-16 bg-[#0a0e0a]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12 font-mono">
              <span className="text-white">ESPECIFICACIONES</span> <span className="text-green-500">TÉCNICAS</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black p-6 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-mono mb-4 text-white">STACK TECNOLÓGICO</h3>
                <ul className="space-y-3 font-mono text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                    <span>Backend: Node.js + Express + WebSockets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                    <span>Frontend: React + Next.js + D3.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                    <span>Base de datos: MongoDB + Redis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                    <span>Análisis: Python + TensorFlow + Pandas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                    <span>Infraestructura: Docker + Kubernetes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black p-6 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-mono mb-4 text-white">REQUISITOS DEL SISTEMA</h3>
                <div className="font-mono text-sm space-y-4">
                  <div>
                    <div className="mb-1 text-green-300">CPU</div>
                    <div className="w-full bg-[#0a0e0a] rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-1/2"></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Mínimo: 4 cores</span>
                      <span>Recomendado: 8+ cores</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 text-green-300">RAM</div>
                    <div className="w-full bg-[#0a0e0a] rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Mínimo: 8GB</span>
                      <span>Recomendado: 16GB+</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 text-green-300">ALMACENAMIENTO</div>
                    <div className="w-full bg-[#0a0e0a] rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Mínimo: 50GB SSD</span>
                      <span>Recomendado: 100GB+ SSD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation & Community */}
        <section id="docs" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12 font-mono">
              <span className="text-white">DOCUMENTACIÓN</span> <span className="text-green-500">& COMUNIDAD</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#0a0e0a] p-6 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-mono mb-4 flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-green-500" />
                  <span className="text-white">API DOCS</span>
                </h3>
                <p className="text-green-300 text-sm mb-4 font-mono">
                  Documentación completa de la API con ejemplos de código y endpoints.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-green-500 text-green-500 hover:bg-green-500/10 font-mono text-xs"
                >
                  VER DOCUMENTACIÓN
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>

              <div className="bg-[#0a0e0a] p-6 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-mono mb-4 flex items-center gap-2">
                  <Github className="h-5 w-5 text-green-500" />
                  <span className="text-white">REPOSITORIO</span>
                </h3>
                <p className="text-green-300 text-sm mb-4 font-mono">
                  Código fuente completo, issues, pull requests y contribuciones de la comunidad.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-green-500 text-green-500 hover:bg-green-500/10 font-mono text-xs"
                >
                  EXPLORAR GITHUB
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>

              <div className="bg-[#0a0e0a] p-6 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-mono mb-4 flex items-center gap-2">
                  <Server className="h-5 w-5 text-green-500" />
                  <span className="text-white">DESPLIEGUE</span>
                </h3>
                <p className="text-green-300 text-sm mb-4 font-mono">
                  Guías de instalación para diferentes entornos: Docker, Kubernetes, VPS.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-green-500 text-green-500 hover:bg-green-500/10 font-mono text-xs"
                >
                  GUÍAS DE DESPLIEGUE
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
