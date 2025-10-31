import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    navigate("/home", { replace: true });
  };

  return (
    <div className="flex min-h-screen">

      <div className="w-full md:w-1/2 flex flex-col justify-center px-12 sm:px-20">

        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <img src="/logo.svg" alt="logo" className="w-6 h-6" />
            <span className="text-sm font-medium text-gray-700">
              Ecommerce Online
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Iniciar Sesion</h2>
          <p className="text-sm text-gray-500 mt-2">
            ¿No tienes cuenta?{" "}
            <Link to="/auth/registro" className="text-black font-semibold hover:underline">
              Regístrate
            </Link>
          </p>
        </div>


        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition-all"
          >
            Iniciar Sesion
          </button>
        </form>
      </div>

      <div className="hidden md:flex w-1/2 relative">
        <img
          src="/bg-login.png"
          alt="background"
          className="object-cover w-full/ h-full"
        />

        <img
          src="/logo.svg"
          alt="logo grande"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/2 w-32"
        />
      </div>
    </div>
  );
}
