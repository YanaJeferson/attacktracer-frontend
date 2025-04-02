"use client";

import ButtonLabel from "@/components/features/page/button-label";
import InputLabel from "@/components/features/page/input-label";
import { useFetch } from "@/hooks/useFetch";
import useAuthStore from "@/store/login.store";
import { Eye, EyeOff, Lock, Shield } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface inputsLogin {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: {
    name: string;
    avatar: string;
  };
}

const LoginForm = () => {
  const [viewPass, setViewPass] = useState<boolean>(false);
  const { fetchData, isLoading, error, data } = useFetch<LoginResponse>();
  const { login } = useAuthStore();

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

  const onSubmit = async (inputData: inputsLogin) => {
    try {
      await fetchData("/auth/login/attacktracer", {
        method: "POST",
        body: JSON.stringify(inputData),
        showError: true,
      });
    } catch (error) {
      console.error("error", error);
    }
  };

   useEffect(() => {
     if (data) {
       login({
         userName: data.user.name,
         userAvatar: data.user.avatar,
         accessToken: data.access_token,
         refreshToken: data.refresh_token,
       });
       redirect("/dashboard");
     }
   }, [data]);

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
