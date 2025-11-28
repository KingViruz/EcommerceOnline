import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../services/common/products";
import { FiHeart, FiMinus, FiPlus, FiShoppingCart, FiLogOut } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

export default function ProductoDetallePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, totalItems } = useCart();

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  // Si el id no existe, redirige a home
  useEffect(() => {
    if (!product) navigate("/home", { replace: true });
  }, [product, navigate]);

  // tallas y cantidad
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, qty, { size });
  };

  const onLogout = () => {
    // futuro: localStorage.removeItem("auth");
    // localStorage.removeItem("token");
    navigate("/auth/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Logo + nombre */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <img src="/logo.svg" className="w-6 h-6" alt="logo" />
            <span className="text-sm font-medium">Ecommerce Online</span>
          </div>

          {/* Buscador */}
          <div className="ml-auto hidden md:block">
            <div className="relative">
              <input
                placeholder="Buscar"
                className="w-80 rounded-full border border-gray-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-black"
              />
              <svg
                className="w-4 h-4 absolute left-3 top-2.5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </div>
          </div>

          {/* Carrito */}
          <button
            type="button"
            onClick={() => navigate("/home/carrito")}
            className="relative ml-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-50"
            aria-label="Carrito"
          >
            <FiShoppingCart className="w-5 h-5 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-black text-white">
                {totalItems}
              </span>
            )}
          </button>

          {/* Cerrar sesión */}
          <button
            onClick={onLogout}
            className="ml-2 inline-flex items-center gap-2 px-3 h-10 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <FiLogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Cerrar sesión</span>
          </button>
        </div>

        {/* Nav secciones: Productos activo en esta vista */}
        <nav className="border-t">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center gap-12 text-gray-500 text-base">
              <li
                className="py-3 hover:text-black cursor-pointer"
                onClick={() => navigate("/home")}
              >
                Inicio
              </li>
              <li className="py-3 hover:text-black cursor-pointer">Nosotros</li>
              <li
                className="py-3 -mb-px border-b-2 border-black text-black font-semibold cursor-pointer"
                onClick={() => navigate("/home/productos")}
              >
                Productos
              </li>
              <li className="py-3 hover:text-black cursor-pointer">
                Contáctanos
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* CONTENIDO DETALLE */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Migas */}
        <div className="text-sm text-gray-500 mb-6">
          <span
            className="hover:underline cursor-pointer"
            onClick={() => navigate("/home")}
          >
            Inicio
          </span>
          <span className="mx-2">/</span>
          <span
            className="hover:underline cursor-pointer"
            onClick={() => navigate("/home/productos")}
          >
            Productos
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Galería izquierda */}
          <div>
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[480px] object-cover"
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {product.isNew && (
                  <span className="text-[11px] font-bold bg-green-600 text-white px-2 py-1 rounded">
                    NUEVO
                  </span>
                )}
                {product.discount && (
                  <span className="text-[11px] font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
              </div>
              {/* Flechas (decorativas) */}
              <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 border rounded-full p-2 shadow">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 border rounded-full p-2 shadow">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>

            {/* Thumbnails demo */}
            <div className="mt-3 grid grid-cols-4 gap-3">
              {[product.image, product.image, product.image, product.image].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`thumb-${i}`}
                    className="w-full h-24 object-cover rounded-lg border border-gray-200"
                  />
                )
              )}
            </div>
          </div>

          {/* Info derecha */}
          <div className="max-w-xl">
            {/* Rating + opiniones fake */}
            <div className="text-sm text-gray-600">
              {"★★★★★".slice(0, Math.round(product.rating))}{" "}
              <span className="ml-1">11 Opiniones</span>
            </div>

            <h1 className="mt-1 text-2xl font-semibold text-gray-900">
              {product.title}
            </h1>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Precio */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.priceBefore && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.priceBefore.toFixed(2)}
                </span>
              )}
            </div>

            {/* Tallas */}
            <div className="mt-6">
              <div className="text-sm text-gray-700 mb-2">Tallas</div>
              <div className="flex gap-3">
                {["S", "M", "L"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSize(t)}
                    className={`px-3 py-1 rounded border ${
                      size === t
                        ? "border-black"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Cantidad + Me gusta */}
            <div className="mt-6 flex gap-3">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2"
                >
                  <FiMinus />
                </button>
                <span className="px-4">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-2"
                >
                  <FiPlus />
                </button>
              </div>

              <button className="flex-1 inline-flex items-center justify-center gap-2 border rounded-md px-4 py-2 hover:bg-gray-50">
                <FiHeart className="text-gray-700" />
                Me gusta
              </button>
            </div>

            {/* Añadir al carrito */}
            <button
              onClick={handleAddToCart}
              className="mt-4 w-full bg-black text-white py-3 rounded-md hover:bg-gray-900"
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
