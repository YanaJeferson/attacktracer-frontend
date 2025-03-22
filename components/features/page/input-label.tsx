
"use client"
import { Input } from "@/components/ui/input";
import React, { InputHTMLAttributes } from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";

interface ValidationRules {
    required?: boolean;
    maxChar?: number;
    minChar?: number;
    type?: 'text' | 'email' | 'password';
}

interface InputLabelProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label: string;
    name: string;
    icon?: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>;
    validationRules?: ValidationRules;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const InputLabel: React.FC<InputLabelProps> = ({
    label,
    name,
    type = "text",
    placeholder,
    icon,
    register,
    validationRules = {},
    error,
    ...props
}) => {

    const registerOptions: RegisterOptions = {
        required: validationRules.required ? `${label} es obligatorio` : undefined,
        maxLength: validationRules.maxChar
            ? { value: validationRules.maxChar, message: `${label} no puede tener más de ${validationRules.maxChar} caracteres` }
            : undefined,
        minLength: validationRules.minChar
            ? { value: validationRules.minChar, message: `${label} debe tener al menos ${validationRules.minChar} caracteres` }
            : undefined,
        pattern: validationRules.type === 'email'
            ? { value: /\S+@\S+\.\S+/, message: `${label} debe ser una dirección de correo electrónico válida` }
            : undefined,
    };


    return (
        <div className="space-y-2 flex flex-col">
            <label htmlFor={name}>{label}</label>
            <div className="relative h-8">
                {icon && <div className="absolute left-3 top-[20%]">{icon}</div>}
                <Input
                    id={name}
                    className={`${icon ? "pl-10" : "pl-2"
                        } rounded-md  border h-8 w-full  bg-black  border-green-500/30 focus-visible:ring-green-500   ${error ? "border-red-500" : ""
                        }`}
                    placeholder={placeholder}
                    type={type}
                    {...(register ? register(name, registerOptions) : {})}
                    {...props}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputLabel;