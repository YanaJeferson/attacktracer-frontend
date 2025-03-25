"use client";

import { Check, LoaderCircle, Ban } from "lucide-react";
import React from "react";

interface ButtonLabelProps {
  label: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  type?: "submit" | "reset" | "button";
  status?: "loading" | "success" | "error" | null;
  variant?: "primary" | "alternative" | "dark" | "light" | "success" | "danger" | "warning";
  icon?: React.ReactNode;
}

const variantClasses = {
  primary: "w-full bg-green-600 hover:bg-green-700 text-black font-mono text-sm",
  alternative: "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
  dark: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
  light: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
  success: "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
  danger: "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
  warning: "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900",
};

const statusIcons = {
  loading: <LoaderCircle className="animate-spin" />,
  success: <Check />,
  error: <Ban />,
};

const ButtonLabel: React.FC<ButtonLabelProps> = ({
  label,
  onClick,
  className = "",
  ariaLabel,
  status,
  icon,
  type = "submit",
  variant = "primary",
}) => (
  <button
    className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${variantClasses[variant]} ${className} ${status ? "opacity-50 cursor-not-allowed" : "opacity-100"
      }`}
    type={type}
    onClick={onClick}
    aria-label={ariaLabel || label}
    disabled={!!status}
  >
    {label}
    {status ? (
      <span>{statusIcons[status]}</span>
    ) : (
      icon && <span>{icon}</span>
    )}

  </button>
);

export default ButtonLabel;
