import React from 'react'
import { Outlet } from 'react-router';
import '../../styles/dashboardLayout.css';
import Footer from "../components/Footer";
 

export default function DashboardLayout() {
  return (
    // 👇 altura fija a viewport y sin scroll en el body
    <div className="flex h-screen overflow-hidden">

      <main className="flex-1 h-full overflow-y-auto bg-[#fafaf7]">
        {/* Columna: contenido crece, footer al final */}
        <div className="min-h-full flex flex-col">
          {/* Contenido */}
          <div className="grow">
            <Outlet />
          </div>

          {/* Footer: 20% del alto disponible del main */}
          <div className="basis-1/5">
            {/* h-full para que el footer use todo ese 20% */}
            <div className="h-full">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
