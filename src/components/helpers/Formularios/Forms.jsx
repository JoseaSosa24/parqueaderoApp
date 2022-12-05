import React from "react";

export const Forms = () => {
  return (
    <section className="tablaRegistros d-flex justify-content-center align-items-start ">
      <table id="tabla">
        <tr>
          <td className="td-principal">Documento</td>
          <td className="td-principal">Nombre</td>
          <td className="td-principal">Correo</td>
          <td className="td-principal">Direccion</td>
          <td className="td-principal">Celular</td>
          <td className="td-principal">Accion</td>
        </tr>
      </table>
    </section>
  );
};
