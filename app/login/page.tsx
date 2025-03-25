"use client";

import HeaderCardLogin from "./components/header-card-login";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./components/login-form";
import RegisterForm from "./components/register-form";
import { useState } from "react";
import ContinueGithub from "./components/continue-github";

interface TabContent {
  title: string;
  description: string;
  value: "loginForm" | "registerForm";
  component: React.ReactNode;
  linkText: string;
  linkLabel: string;
}

const Login = () => {
  const [tabFormActive, setTabFormActive] = useState<boolean>(true);

  const tabContents: TabContent[] = [
    {
      title: "ACCESO AL SISTEMA",
      description: "Ingresa tus credenciales para continuar",
      value: "loginForm",
      component: <LoginForm />,
      linkText: "¿YA TIENES UNA CUENTA?",
      linkLabel: "INICIAR SESIÓN",
    },
    {
      title: "CREAR CUENTA",
      description: "Ingrese los datos requeridos para crear una cuenta",
      value: "registerForm",
      component: <RegisterForm updateForm={setTabFormActive} />,
      linkText: "¿NO TIENES UNA CUENTA?",
      linkLabel: "CREAR CUENTA",
    },
  ];

  const activeTab = tabFormActive ? tabContents[0] : tabContents[1];
  const oppositeTab = tabFormActive ? tabContents[1] : tabContents[0];

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <HeaderCardLogin
          title={activeTab.title}
          descripttion={activeTab.description}
        />

        <Tabs
          defaultValue="loginForm"
          className="w-[400px]"
          onValueChange={(value) => setTabFormActive(value === "loginForm")}
        >
          {tabContents.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.component}
            </TabsContent>
          ))}

          <ContinueGithub />

          <TabsList className="bg-transparent w-full">
            <TabsTrigger
              value={oppositeTab.value}
              className="w-full justify-center hover:cursor-pointer"
            >
              <p className="text-green-400/70 text-xs font-mono">
                {oppositeTab.linkText}
                <span className="text-green-500 hover:text-green-400 ml-1">
                  {oppositeTab.linkLabel}
                </span>
              </p>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
