"use client";
import ButtonLabel from "@/components/features/page/button-label";
import InputLabel from "@/components/features/page/input-label";
import { useFetch } from "@/hooks/useFetch";
import { AtSign, Eye, EyeOff, Lock, User } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface inputsRegiter {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = ({
  updateForm,
}: {
  updateForm: (value: boolean) => void;
}) => {
  const [viewPass, setViewPass] = useState<boolean>(true);
  const { fetchData, isLoading, error, data } = useFetch<inputsRegiter>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputsRegiter>();

  const inputFields = [
    {
      label: "Nombre y apellidos",
      name: "name",
      type: "text",
      icon: <User size={20} />,
      rules: { required: true, minLength: 3 },
    },
    {
      label: "Correo electrónico",
      name: "email",
      type: "text",
      icon: <AtSign size={20} />,
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
  const onSubmit = async (data: inputsRegiter) => {
    try {
      await fetchData("/register/attacktracer", {
        method: "POST",
        body: JSON.stringify(data),
        showError: true,
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    if (!data) return;
    updateForm(true);
    toast("Cuenta creada con exito", {
      description: "Inicia sesión para continuar",
    });
    redirect("/login");
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
              error={errors[name as keyof inputsRegiter]?.message}
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
        <p className="text-red-500 text-xs font-mono pb-2">
          {error.message === "Email already exists"
            ? "El correo electrónico ya existe"
            : "Error de servicio, intente más tarde"}
        </p>
      )}
      <ButtonLabel
        label="CREAR CUENTA"
        status={isLoading ? "loading" : null}
        variant={isLoading ? "success" : "primary"}
      />
    </form>
  );
};

export default RegisterForm;
