"use client";

import ButtonLabel from "@/components/features/page/button-label";
import InputLabel from "@/components/features/page/input-label";
import { useFetch } from "@/hooks/useFetch";
import { Eye, EyeOff, Lock, Shield } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface inputsLogin {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}
const LoginForm = () => {
  const [viewPass, setViewPass] = useState<boolean>(false);
  const { fetchData, isLoading, error } = useFetch<LoginResponse>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputsLogin>();

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

  const onSubmit = async (data: inputsLogin) => {
    try {
      await fetchData("/login/attacktracer", {
        method: "POST",
        body: JSON.stringify(data),
        showError: true,
      });
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 my-8">
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
      </div>
      {error && (
        <p className="text-red-500 text-xs font-mono">
          {error.error === "Unauthorized"
            ? "Credenciales inválidas"
            : "Error de servicio, intente más tarde"}
        </p>
      )}

      <ButtonLabel
        label="INICIAR SESIÓN"
        status={isLoading ? "loading" : null}
        variant={isLoading ? "success" : "primary"}
      />
    </form>
  );
};

export default LoginForm;
