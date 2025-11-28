import React from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiLogOut, FiFilter } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { products } from "../../services/common/products";
import { ProductCard } from "../components/ProductCard";
import Footer from "../components/Footer";

export default function ProductosPage() {
  const navigate = useNavigate();
  const { totalItems, addItem } = useCart();

  const onLogout = () => {
    // futuro: localStorage.removeItem("auth"); localStorage.removeItem("token");
    navigate("/auth/login", { replace: true });
  };

  const handleAddEvent = (p) => {
    addItem(p, 1);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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

        {/* Nav secciones: Productos activo */}
        <nav className="border-t">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center gap-12 text-gray-500 text-base cursor-pointer">
              <li
                className="py-3 hover:text-black"
                onClick={() => navigate("/home")}
              >
                Inicio
              </li>
              <li className="py-3 hover:text-black">Nosotros</li>
              <li className="py-3 -mb-px border-b-2 border-black text-black font-semibold">
                Productos
              </li>
              <li className="py-3 hover:text-black">
                Contáctanos
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1">
        {/* HERO - sin padding lateral extra dentro del contenedor */}
        <section className="max-w-7xl mx-auto mt-4">
          <div className="relative h-[240px] md:h-[300px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=1600&auto=format&fit=crop"
              alt="hero productos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Encuentra todos nuestros productos
              </h1>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-white/90">
                Encuentra piezas únicas que definen tu estilo. Calidad, variedad
                y los mejores precios, a solo un clic de distancia.
              </p>
            </div>
          </div>
        </section>

        {/* LISTADO + FILTROS */}
        <section className="max-w-7xl mx-auto px-4 pt-6 pb-10">
          {/* 12 columnas: 3 para filtros, 9 para productos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar filtros (izquierda) */}
            <aside className="lg:col-span-3">
              <div className="flex items-center gap-2 text-sm font-semibold mb-4">
                <FiFilter className="w-4 h-4" />
                <span>Filtrar</span>
              </div>

              <div className="space-y-6 text-sm">
                {/* Categorías */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Categorías
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="cursor-pointer hover:underline">Camisas</li>
                    <li className="cursor-pointer hover:underline">Jeans</li>
                    <li className="cursor-pointer hover:underline">Gorras</li>
                    <li className="cursor-pointer hover:underline">Zapatos</li>
                  </ul>
                </div>

                {/* Precios */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Precios
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">
                    Todos los precios
                  </p>
                </div>
              </div>
            </aside>

            {/* Columna productos (derecha, más ancha) */}
            <div className="lg:col-span-9">
              {/* Barra superior */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-base font-semibold">Más recientes</h2>
                  <p className="text-xs text-gray-500">
                    Mostrando {products.length} productos
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Ordenar por</span>
                    <select className="border rounded-md px-2 py-1 text-sm outline-none focus:border-black">
                      <option>Más recientes</option>
                      <option>Precio: menor a mayor</option>
                      <option>Precio: mayor a menor</option>
                    </select>
                  </div>

                  {/* Icono vista (maqueta) */}
                  <div className="hidden md:flex items-center gap-2 text-gray-400">
                    <div className="w-8 h-8 flex items-center justify-center border rounded-md cursor-pointer text-xs">
                      ☰
                    </div>
                  </div>
                </div>
              </div>

              {/* GRID DE PRODUCTOS - más espacio entre tarjetas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} onAdd={handleAddEvent} />
                ))}
              </div>

              {/* Ver más */}
              <div className="mt-8 flex justify-center">
                <button className="px-6 py-2 border rounded-full text-sm hover:bg-gray-50">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
