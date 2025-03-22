"use client";

import InputLabel from "@/components/features/page/input-label";
import { Button } from "@/components/ui/button";

import { ArrowRight, Eye, EyeOff, Github, Lock, Shield } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HeaderCardLogin from "./components/header-card-login";

interface inputsLogin {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputsLogin>();
  const [viewPass, setViewPass] = useState<boolean>(false);

  const inputFields = [
    {
      label: "Usuario",
      name: "email",
      type: "text",
      icon: <Shield size={20} />,
      rules: { required: true, minLength: 3 },
    },
    {
      label: "Contraseña",
      name: "password",
      type: viewPass ? "text" : "password",
      icon: <Lock size={20} />,
      rules: { required: true, minLength: 3 },
    },
  ];

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <HeaderCardLogin
          title="ACCESO AL SISTEMA"
          descripttion="Ingresa tus credenciales para continuar"
        />
        <form className="space-y-5">
          {inputFields.map(({ label, name, type, icon, rules }, index) => (
            <div className="relative" key={index}>
              <InputLabel
                label={label}
                type={type}
                name={name}
                icon={icon}
                validationRules={rules}
                error={errors[name as keyof inputsLogin]?.message}
                register={register}
              />
              {name === "password" && (
                <span
                  className={`absolute right-2 ${
                    errors.password ? "top-[40%]" : "top-[55%]"
                  } `}
                  onClick={() => setViewPass(!viewPass)}
                >
                  {viewPass ? <EyeOff /> : <Eye />}
                </span>
              )}
            </div>
          ))}

          <div className="flex items-center justify-between">
            <a
              className="text-xs text-green-500 hover:text-green-400 font-mono"
            >
              ¿OLVIDASTE TU CONTRASEÑA?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-black font-mono text-sm"
          >
            INICIAR SESIÓN
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            type="submit"
            className="w-full bg-transparent hover:bg-black text-white border border-green-500/30 "
          >
            CONTINUAR CON GITHUB
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-green-400/70 text-xs font-mono">
            ¿NO TIENES UNA CUENTA?{" "}
            <a href="#" className="text-green-500 hover:text-green-400">
              CREAR CUENTA
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
