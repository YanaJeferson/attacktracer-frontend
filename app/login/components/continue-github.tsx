import ButtonLabel from "@/components/features/page/button-label";
import { Github } from "lucide-react";
import { useEffect } from "react";

const ContinueGithub = () => {
  const generateRandomState = () => {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
      ""
    );
  };

  const handleLoginGithub = async () => {
    try {
      const state = generateRandomState();
      sessionStorage.setItem("github_oauth_state", state);

      const width = 600;
      const height = 700;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;

      const authWindow = window.open(
        `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_CALLBACK_URL}&scope=user&state=${state}`,
        "GitHub Login",
        `width=${width},height=${height},left=${left},top=${top},popup=1`
      );

      if (!authWindow) {
        console.error("Failed to open authentication window.");
        return;
      }

      const checkWindowAndReload = setInterval(() => {
        if (authWindow.closed) {
          clearInterval(checkWindowAndReload);
          setTimeout(() => {
            localStorage.setItem("redirectToDashboard", "true");
            window.location.reload();
          }, 500);
        }
      }, 500);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    const shouldRedirect = localStorage.getItem("redirectToDashboard");
    if (shouldRedirect === "true") {
      localStorage.removeItem("redirectToDashboard");
      window.location.href = "/dashboard";
    }
  }, []);

  return (
    <ButtonLabel
      onClick={handleLoginGithub}
      type="button"
      label="CONTINUAR CON GITHUB"
      icon={<Github size={20} />}
      variant="alternative"
      className="mt-4"
    />
  );
};

export default ContinueGithub;
