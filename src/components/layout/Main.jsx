import React from "react";
import { Inicio } from '../helpers/Inicio/Inicio'
import { Clientes } from "../helpers/Formularios/Clientes/Clientes";
import { Ingresos } from "../helpers/Formularios/Ingresos/Ingresos"
import { Productos } from "../helpers/Formularios/Productos/Productos";
import { Routes, Route } from 'react-router-dom';
import { Ventas } from "../helpers/Formularios/Ventas/Ventas";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PaginaError404 } from "../helpers/Error/PaginaError404";


export const Main = () => {
  /* const router = createBrowserRouter([
    {
      path: '/',
      element: <Inicio />,
      errorElement: <PaginaError404 />
    },
    {
      path: '/clientes',
      element: <Clientes />
    },
    {
      path: '/productos',
      element: <Productos />
    },
    {
      path: '/ingresos',
      element: <Ingresos />
    },
    {
      path: '/ventas',
      element: <Ventas />
    }
    
  ]);
   */
  /*  const router = createBrowserRouter(
     createRoutesFromElements(
       <Route path="/" element={<Inicio />}>
         <Route path='/clientes' element={<Clientes />} />
         <Route path='/productos' element={<Productos />} />
         <Route path='/ingresos' element={<Ingresos />} />
         <Route path='/ventas' element={<Ventas />} />
       </Route>
     )
   ); */
  return (
    <main className="" id="">
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/ingresos' element={<Ingresos />} />
        <Route path='/ventas' element={<Ventas />} />
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </main>
  );
};
