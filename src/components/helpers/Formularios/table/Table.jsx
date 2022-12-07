import React from "react";

export const Table = ({ Td1, Td2, Td3, Td4, Td5, Td6 }) => {
  return (
    <section className="tablaRegistros d-flex justify-content-center align-items-start ">
      <table id="tabla">
        <tr>
          <td className="td-principal">{Td1}</td>
          <td className="td-principal">{Td2}</td>
          <td className="td-principal">{Td3}</td>
          <td className="td-principal">{Td4}</td>
          <td className="td-principal">{Td5}</td>
          <td className="td-principal">{Td6}</td>
        </tr>
      </table>
    </section>
  );
};
