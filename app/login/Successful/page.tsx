"use client";

import React, { useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";

export interface check {
  status: string;
}

const SuccessfulLogin = () => {
  const { fetchData, data } = useFetch<check>();

  useEffect(() => {
    const checkAndClose = async () => {
      try {
        await fetchData("/auth/check");
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAndClose();
  }, []);

  useEffect(() => {
    if (data?.status === "ok") {
      setTimeout(() => {
        localStorage.setItem("reload", "true");
        window.close();
      }, 1000);
    }
  }, [data]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Login Successful!
        </h1>
        <p className="text-gray-200">
          {">_  "}You have been successfully logged in.
        </p>
        <p className="text-gray-400 text-sm mt-4">
          This window will close automatically...
        </p>
      </div>
    </div>
  );
};

export default SuccessfulLogin;
