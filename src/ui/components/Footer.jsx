import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Columna 1 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.svg" alt="logo" className="w-6 h-6" />
            <span className="text-sm font-medium text-gray-800">
              Ecommerce Online
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Consigue lo mejor con nosotros.
          </p>
          <div className="flex gap-4 text-gray-800">
            <a
              href="#"
              className="hover:text-black transition"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v2h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-black transition"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zm4.8-8.9a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Nosotros</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link to="#" className="hover:text-black">
                Features
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Productos</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link to="#" className="hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Soporte</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link to="#" className="hover:text-black">
                Getting started
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black">
                Help center
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 5 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Contactanos</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" stroke="none" />
                <path d="M4 4l8 8 8-8M4 20h16" />
              </svg>
              <a href="mailto:ticoblogg@gmail.com" className="hover:text-black">
                ticoblogg@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
               <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" stroke="none" />
                <path d="M4 4l8 8 8-8M4 20h16" />
              </svg>
              <a href="tel:+573196737592" className="hover:text-black">
                (319) 673 – 7592
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ecommerce Online. Todos los derechos reservados.
      </div>
    </footer>
  );
}
