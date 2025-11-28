import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";

export default function CarritoPage() {
  const navigate = useNavigate();
  const { items, subtotal, updateQty, removeItem, totalItems } = useCart();
  const shipping = 0;
  const total = subtotal + shipping;

  const onLogout = () => {
    // futuro: localStorage.removeItem("auth");
    // localStorage.removeItem("token");
    navigate("/auth/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-white">

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

          <button
            onClick={onLogout}
            className="ml-2 inline-flex items-center gap-2 px-3 h-10 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <FiLogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Cerrar sesión</span>
          </button>
        </div>

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
              <li className="py-3 -mb-px border-b-2 border-black text-black font-semibold cursor-pointer"
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


      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="space-y-6 lg:col-span-2">
            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-lg font-semibold mb-4">Dirección de envío</h2>

              <form className="space-y-4 text-sm">
                <div>
                  <label className="block text-gray-700 mb-1 text-xs font-semibold uppercase">
                    Dirección de entrega
                  </label>
                  <input className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-black" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1 text-xs font-semibold uppercase">
                      Ciudad
                    </label>
                    <input className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-xs font-semibold uppercase">
                      Departamento
                    </label>
                    <input className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-xs font-semibold uppercase">
                      Código postal
                    </label>
                    <input className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-black" />
                  </div>
                </div>
              </form>
              
            </div>

            {/* metodos de pago */}
            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-lg font-semibold mb-4">Método de pago</h2>

              <div className="space-y-3 text-sm">
                <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                  <input
                    type="radio"
                    name="pay"
                    defaultChecked
                    className="accent-black"
                  />
                  <span>Tarjeta de crédito</span>
                </label>
                <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                  <input type="radio" name="pay" className="accent-black" />
                  <span>Addi</span>
                </label>
                <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                  <input type="radio" name="pay" className="accent-black" />
                  <span>PSE</span>
                </label>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 text-sm">
                <div>
                  <label className="block text-gray-700 mb-1 text-xs font-semibold uppercase">
                    Número de tarjeta
                  </label>
                  <input
                    placeholder="1234 1234 1234 1234"
                    className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-black"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 mb-1 text-xs font-semibold uppercase">
                      Fecha de expiración
                    </label>
                    <input
                      placeholder="MM/YY"
                      className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-xs font-semibold uppercase">
                      CVC
                    </label>
                    <input
                      placeholder="CVC código"
                      className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 text-sm">
                Realizar la orden
              </button>
            </div>
          </div>

          {/* resumen de la orden */}
          <div className="border rounded-xl p-6 bg-white h-fit">
            <h2 className="text-lg font-semibold mb-4">Orden</h2>

            {items.length === 0 ? (
              <p className="text-sm text-gray-500">Tu carrito está vacío.</p>
            ) : (
              <>
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size || "s"}`}
                    className="flex gap-3 mb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-24 object-cover rounded-md border"
                    />
                    <div className="flex-1 text-sm">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          {item.size && (
                            <p className="text-xs text-gray-500 mt-0.5">
                              Talla: {item.size}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-xs text-gray-400 hover:text-red-500"
                        >
                          Eliminar
                        </button>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-semibold">
                          ${item.price.toFixed(2)}
                        </span>
                        <div className="inline-flex items-center border rounded-md text-xs">
                          <button
                            className="px-2 py-1"
                            onClick={() =>
                              updateQty(item.id, item.size, item.qty - 1)
                            }
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.qty}</span>
                          <button
                            className="px-2 py-1"
                            onClick={() =>
                              updateQty(item.id, item.size, item.qty + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4 mt-2 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Envío</span>
                    <span className="font-medium">
                      {shipping === 0
                        ? "Gratis"
                        : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t mt-2 text-base font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
