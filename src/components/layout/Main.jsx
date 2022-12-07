import React from "react";
import { Clientes } from "../helpers/Formularios/Clientes/Clientes";
import { Ingresos } from "../helpers/Formularios/Ingresos/Ingresos"
import { Productos } from "../helpers/Formularios/Productos/Productos";

export const Main = () => {
  return (
    <main className="" id="">
      <Clientes />
      <Productos/>
      <Ingresos/>
    </main>
  );
};
