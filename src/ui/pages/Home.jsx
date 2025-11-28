import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { products } from "../../services/common/products";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../../context/CartContext";

export default function HomePage() {
  const scrollerRef = useRef(null);

  const scrollBy = (delta) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  const navigate = useNavigate();

  const { addItem, totalItems } = useCart();

  const onLogout = () => {
    // para el futuro localStorage.removeItem("auth")
    // para el futuro localStorage.removeItem("token")
    navigate("/auth/login", { replace: true });
  };

  // Drag to scroll only pa web
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const onMouseDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragState.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.classList.add("cursor-grabbing");
  };
  const onMouseLeave = () => {
    dragState.current.isDown = false;
    scrollerRef.current?.classList.remove("cursor-grabbing");
  };
  const onMouseUp = () => {
    dragState.current.isDown = false;
    scrollerRef.current?.classList.remove("cursor-grabbing");
  };
  const onMouseMove = (e) => {
    const el = scrollerRef.current;
    if (!el || !dragState.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.2;
    el.scrollLeft = dragState.current.scrollLeft - walk;
  };

  /* agregar al carrito */
  const handleAddEvent = (p) => {
    addItem(p, 1); 
    console.log("Se anadio al carrito bien el product:", p.id);
  };

  return (
    <div className="min-h-screen bg-white">

       <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">

          <div className="flex items-center gap-2">
            <img src="/logo.svg" className="w-6 h-6" alt="logo" />
            <span className="text-sm font-medium">Ecommerce Online</span>
          </div>


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


          <button
            type="button"
            className="relative ml-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-50"
            aria-label="Carrito"
            onClick={() => navigate('/home/carrito')}
          >
            <FiShoppingCart/>

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-black text-white">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={onLogout}
            className="ml-2 inline-flex items-center gap-2 px-3 h-10 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <FiLogOut/>
            <span className="text-sm font-medium">Cerrar sesion</span>
          </button>

        </div>


        <nav className="border-t">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center gap-12 text-gray-500 text-base cursor-pointer">
              <li className="py-3 -mb-px border-b-2 border-black text-black font-semibold">Inicio</li>
              <li className="py-3 hover:text-black">Nosotros</li>
              <li className="py-3 hover:text-black"
              onClick={() => navigate("/home/productos")}>Productos</li>
              <li className="py-3 hover:text-black">Contáctanos</li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="relative h-[320px] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1600&auto=format&fit=crop"
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-xl text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Estilo y Calidad en un Solo Lugar
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/90">
              Encuentra piezas unicas que definen tu estilo. Calidad, variedad y los mejores precios.
            </p>
            <button className="mt-5 bg-white text-black px-4 py-2 rounded-md w-max hover:bg-gray-100">
              Ver Productos
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Nueva</h2>
            <h2 className="text-2xl font-semibold -mt-1">Colección</h2>
          </div>
          <button onClick={() => scrollBy(400)} className="text-sm text-gray-600 hover:text-black flex items-center gap-1">
            Ver Mas
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>

        <div className="relative">

          <button
            onClick={() => scrollBy(-400)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border rounded-full p-2 shadow hover:bg-white"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => scrollBy(400)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border rounded-full p-2 shadow hover:bg-white"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6"/></svg>
          </button>

          {/* Carrusel */}
          <div
            ref={scrollerRef}
            className="no-scrollbar mt-2 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-4 cursor-grab select-none"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {products.map((producto) => (
              <ProductCard key={producto.id} product={producto} onAdd={handleAddEvent} />
            ))}
          </div>
        </div>

        <hr className="mt-8 border-gray-200" />
      </section>
    </div>
  );
}
