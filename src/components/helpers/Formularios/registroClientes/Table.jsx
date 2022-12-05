import React from "react";
import { TableTd } from "../table/TableTd";

export const Forms = () => {
  return (
    <section className="tablaRegistros d-flex justify-content-center align-items-start ">
      <table id="tabla">
        <tr>
          <TableTd textTd={"Documento"} />
          <TableTd textTd={"Nombre"} />
          <TableTd textTd={"Correo"} />
          <TableTd textTd={"Direccion"} />
          <TableTd textTd={"Celular"} />
          <TableTd textTd={"Accion"} />
        </tr>
      </table>
    </section>
  );
};
