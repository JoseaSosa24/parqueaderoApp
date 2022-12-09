import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const URI = 'http://localhost:3100/ingresos';

export const TableIngresos = ({ textoColumna1, textoColumna2, textoColumna3, textoColumna4, textoColumna5, textoColumna6, tdId }) => {

  const [ingreso, setIngreso] = useState([]);

  useEffect(()=>{
    getIngresos();
  },[])

  const getIngresos = async ()=>{
   const res = await axios.get(URI)
   setIngreso(res.data)

  }

  const deleteIngresos = async(id)=>{
    await axios.delete(`${URI}/${id}`);
    getIngresos();
  }


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
          {ingreso.map((ingres) =>(
             <tr key={ingres.idIngreso}>
              <td>{ingres.idCliente}</td>
              <td>{ingres.placaMoto}</td>
              <td>{ingres.fechaIngreso}</td>
              <td>{ingres.horaIngreso}</td>
              <td>{ingres.horasTotales}</td>
              <td><button onClick={()=>{deleteIngresos(ingres.idIngreso)}}>De</button>  </td>
              
           </tr>
          )
           
          )}
         
        </tbody>
      </table>
    </section>
  );
};