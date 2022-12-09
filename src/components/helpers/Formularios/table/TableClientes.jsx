import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const URI = 'http://localhost:3100/clientes';

export const TableClientes = ({ textoColumna1, textoColumna2, textoColumna3, textoColumna4, textoColumna5, textoColumna6, tdId }) => {

  const [cliente, setCliente] = useState([]);

  useEffect(()=>{
    getClientes();
  },[])

  const getClientes = async ()=>{
   const res = await axios.get(URI)
   setCliente(res.data)

  }

  const deleteCliente = async (id)=>{
     await axios.delete(`${URI}/${id}`);
    getClientes();

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
          {cliente.map((client) =>(
             <tr key={client.idCliente}>
              
              <td>{client.cedCliente}</td>
              <td>{client.nombre}</td>
              <td>{client.correo}</td>
              <td>{client.direccion}</td>
              <td>{client.celular}</td>
              <td>
                <button onClick={()=>{deleteCliente(client.idCliente)}}>Delete</button>
              </td>
           </tr>
          )
           

          )}
         

          

        </tbody>
      </table>
    </section>
  );
};