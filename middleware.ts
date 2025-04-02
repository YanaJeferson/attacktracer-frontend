import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {

  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;


  if (!accessToken && refreshToken) {
    try {
      console.log("Intentando refrescar token...");

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/login/attacktracer/refresh`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (res.ok) {
        console.log("Token refrescado exitosamente");
        return NextResponse.next();
      } else {
        console.log("Falló la renovación del token, redirigiendo a /login");
      }
    } catch (error) {
      console.error("Error al renovar el token:", error);
    }
  }

  if (!accessToken) {
    console.log("Middleware bloqueando acceso, redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log("Middleware permite acceso");
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
