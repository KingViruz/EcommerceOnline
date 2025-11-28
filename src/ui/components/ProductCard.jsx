import React from "react";
import { useNavigate } from "react-router-dom";


export const ProductCard = ({ product, onAdd }) => {
  const navigate = useNavigate();
  return (
    <div className="group relative w-64 shrink-0 snap-start rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      {/* Imagen */}
      <div className="relative h-72 overflow-hidden">
        <img
          onClick={() => navigate(`/home/productoDetalle/${product.id}`)} 
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
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

        {/* Boton al hover */}
        <button
          onClick={() => onAdd && onAdd(product)}
          className="absolute left-1/2 -translate-x-1/2 bottom-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all bg-black text-white text-sm px-4 py-2 rounded-md shadow cursor-pointer"
        >
          Añadir al Carrito
        </button>

        {/* Icono corazon */}
        <button
          title="Favorito"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Texto */}
      <div className="p-3">
        <StarRow rating={product.rating} />
        <h3 className="mt-1 text-sm font-medium text-gray-900 line-clamp-1">{product.title}</h3>
        <div className="mt-0.5 flex items-center gap-2">
          <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
          {product.priceBefore && (
            <span className="text-xs text-gray-400 line-through">
              ${product.priceBefore.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};


/** ====== Utils ====== */
const StarRow = ({ rating = 0 }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} viewBox="0 0 20 20" className="w-4 h-4 fill-current">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.954L10 0l2.948 5.956 6.562.954-4.755 4.635 1.123 6.545z"/>
        </svg>
      ))}
      {half && (
        <svg viewBox="0 0 20 20" className="w-4 h-4">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.954L10 0l2.948 5.956 6.562.954-4.755 4.635 1.123 6.545z" fill="url(#half)" className="text-yellow-500"/>
          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.954L10 0l2.948 5.956 6.562.954-4.755 4.635 1.123 6.545z" className="fill-transparent stroke-yellow-500" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} viewBox="0 0 20 20" className="w-4 h-4 stroke-yellow-500 fill-transparent">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.954L10 0l2.948 5.956 6.562.954-4.755 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
  );
};