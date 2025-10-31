import React, { useState } from "react";


export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido.";
    if (form.password.length < 6) e.password = "Mínimo 6 caracteres.";
    if (form.password !== form.confirm) e.confirm = "Las contraseñas no coinciden.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setServerError("");
    if (!validate()) return;

    try {
      setSubmitting(true);


      alert("¡Cuenta creada! Ahora puedes iniciar sesión.");

    } catch (err) {
      setServerError("Error inesperado. Revisa tu conexión.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen">

      <div className="w-full md:w-1/2 flex flex-col justify-center px-12 sm:px-20">

        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <img src="/logo.svg" alt="logo" className="w-6 h-6" />
            <span className="text-sm font-medium text-gray-700">Ecommerce Online</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Registrate</h2>
          <p className="text-sm text-gray-500 mt-2">
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="text-black font-semibold hover:underline">
              Inicia Sesion
            </a>
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <input
              name="name"
              type="text"
              placeholder="Nombre Completo"
              value={form.name}
              onChange={onChange}
              className={`w-full border-b outline-none py-2 ${
                errors.name ? "border-red-500" : "border-gray-300 focus:border-black"
              }`}
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              className={`w-full border-b outline-none py-2 ${
                errors.email ? "border-red-500" : "border-gray-300 focus:border-black"
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              name="password"
              type={showPw ? "text" : "password"}
              placeholder="Contraseña"
              value={form.password}
              onChange={onChange}
              className={`w-full border-b outline-none py-2 pr-10 ${
                errors.password ? "border-red-500" : "border-gray-300 focus:border-black"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPw((s) => !s)}
              className="absolute right-0 top-1.5 text-sm text-gray-500 px-1"
              aria-label={showPw ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPw ? "Ocultar" : "Mostrar"}
            </button>
            {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
          </div>

          <div className="relative">
            <input
              name="confirm"
              type={showPw2 ? "text" : "password"}
              placeholder="Confirmar Contraseña"
              value={form.confirm}
              onChange={onChange}
              className={`w-full border-b outline-none py-2 pr-10 ${
                errors.confirm ? "border-red-500" : "border-gray-300 focus:border-black"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPw2((s) => !s)}
              className="absolute right-0 top-1.5 text-sm text-gray-500 px-1"
              aria-label={showPw2 ? "Ocultar confirmación" : "Mostrar confirmación"}
            >
              {showPw2 ? "Ocultar" : "Mostrar"}
            </button>
            {errors.confirm && <p className="text-xs text-red-600 mt-1">{errors.confirm}</p>}
          </div>

          {serverError && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded p-2">
              {serverError}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition-all disabled:opacity-60"
          >
            {submitting ? "Registrando..." : "Registrarme"}
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
