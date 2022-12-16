import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clientes } from "../Clientes/Clientes";



/* export const Table = ({ textoColumna1, textoColumna2, textoColumna3, textoColumna4, textoColumna5, textoColumna6, tdId,datos }) => {
  
  let URI =  'http://localhost:3100/'+datos;
  let [datos, setDatos] = useState([]);

  const getDatos = async () => {
    const res = await axios.get(URI)
    setDatos(res.data)

  }
  useEffect(() => {
    getDatos();
  }, [])

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
          {datos.map((dato) => (
            <tr key={dato}>
              <td>{dato.cedCliente}</td>
              <td>{dato.nombre}</td>
              <td>{dato.correo}</td>
              <td>{dato.direccion}</td>
              <td>{dato.direccion}</td>
            </tr>
          )


          )}




        </tbody>
      </table>
    </section>
  );
}; */
