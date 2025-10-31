import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import  LoginPage  from '../ui/pages/Login';
import DashboardLayout from '../ui/layout/DashboardLayout';
import  Home  from '../ui/pages/Home';
import Register from '../ui/pages/Register';
import Productos from '../ui/pages/ProductosPage';
import Carrito from '../ui/pages/Carrito';
import ProductoDetalle from '../ui/pages/ProductoDetallePage';


export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Login */}
      <Route path="/auth/login" element={<LoginPage />} />

      {/* Registro */}
      <Route path="/auth/registro" element={<Register />} />

      {/* Dashboard */}
      <Route path="/home" element={<DashboardLayout />}>
        <Route index element={<Home />} />            {/* /home */}
        <Route path="productos" element={<Productos />} />  {/* /home/productos */}
        <Route path="productoDetalle" element={<ProductoDetalle />} />{/* /home/productoDetalle */}
        <Route path="carrito" element={<Carrito />} />  {/* /home/carrito */}
      </Route>

      {/* 404 */}
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  </BrowserRouter>
);