import React from "react";

export const Table = ({ textoColumna1, textoColumna2, textoColumna3, textoColumna4, textoColumna5, textoColumna6, tdId }) => {
  return (
    <section className="tablaRegistros d-flex justify-content-center align-items-start ">
      <table id="tabla">
        <thead>
          <tr>
            <td className="td-principal" id={tdId}>{textoColumna1}</td>
            <td className="td-principal" id={tdId}>{textoColumna2}</td>
            <td className="td-principal" id={tdId}>{textoColumna3}</td>
            <td className="td-principal" id={tdId}>{textoColumna4}</td>
            <td className="td-principal" id={tdId}>{textoColumna5}</td>
            <td className="td-principal" id={tdId}>{textoColumna6}</td>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </section>
  );
};
