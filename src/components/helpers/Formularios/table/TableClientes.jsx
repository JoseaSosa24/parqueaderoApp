import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Titulo } from "../Titulo";
import { Buscar } from "../Buscar";
import img from "../../../../../src/assets/icons/Editar.png";
import { Button } from "../Button";

const URI = "http://localhost:3100/clientes";

export const TableClientes = ({
  textoColumna1,
  textoColumna2,
  textoColumna3,
  textoColumna4,
  textoColumna5,
  textoColumna6,
  tdId,
}) => {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    getClientes();
  }, []);

  const getClientes = async () => {
    const res = await axios.get(URI);
    setCliente(res.data);
  };

  const deleteCliente = async (id, e) => {
    await axios.delete(`${URI}/${id}`);
    getClientes();
  };
  const confirmacion = (id) => {
    swal({
      title: "Eliminar",
      text: "¿Estás seguro de eliminar este cliente?",
      icon: "warning",
      buttons: ["No", "Sí"],
      dangerMode: true
    }).then((value) => {
      if (value) {
        deleteCliente(id);
        swal({
          title: "Confirmación Eliminación",
          text: "¡Cliente eliminado correctamente!",
          icon: "success",
        });
      }
    });
  };

  const [idCliente, setIdCliente] = useState();
  const [documento, setDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [id, setId] = useState('')
  const [trBody, setTrBody] = useState({ display: "" })
  const [trById, setTrById] = useState({ display: "none" })

  const buscarPorId = async (e) => {
    e.preventDefault()
    console.log(id)
    let res = await axios.get(URI + '/' + id)
    console.log(res)
    setIdCliente(res.data.idCliente)
    setDocumento(res.data.cedCliente);
    console.log(res.data.cedCliente);
    setCorreo(res.data.correo);
    console.log(res.data.correo)
    setDireccion(res.data.direccion)
    console.log(res.data.direccion)
    setCelular(res.data.celular)
    console.log(res.celular)
    setNombre(res.data.nombre)
    console.log(res.data.nombre)
    setTrBody({ display: "none" })
    setTrById({ display: "" })

  }

  const pulsarBuscar = (e) => {
    setId(e.target.value)

  }


  const regresar = () => {
    setTrBody({ display: "" });
    setTrById({ display: "none" });
  };

  return (
    <>
      <section className="seccion-buscar d-flex mt-4 ">
        <Titulo textTitulo={"Listado Clientes"} />
        <section className="d-flex"> 
        <button className="btn" onClick={getClientes
        }><img
            className="iconos-botones-cargar"
            src={"../../../../../src/assets/icons/girar.png"}
            alt=""
            width="40px "
            height="40px"
          /></button>
        <Buscar
          inputbuscar={"input-buscar fst-italic"}
          search={"Ingrese documento"}
          onSubmit={buscarPorId}
          onChange={pulsarBuscar}
        />
        </section>
       
      </section>
      <section className="tabla-registros d-flex justify-content-center align-items-start ">

        <table id="tabla">
          <thead>
            <tr>
              <td className="td-principal" id={tdId}>
                {textoColumna1}
              </td>
              <td className="td-principal" id={tdId}>
                {textoColumna2}
              </td>
              <td className="td-principal" id={tdId}>
                {textoColumna3}
              </td>
              <td className="td-principal" id={tdId}>
                {textoColumna4}
              </td>
              <td className="td-principal" id={tdId}>
                {textoColumna5}
              </td>
              <td className="td-principal" id={tdId}>
                {textoColumna6}
              </td>
            </tr>
          </thead>
          <tbody style={trBody}>
            {cliente.map((client) => (
              <tr key={client.idCliente}>
                <td>{client.cedCliente}</td>
                <td>{client.nombre}</td>
                <td>{client.correo}</td>
                <td>{client.direccion}</td>
                <td>{client.celular}</td>
                <td className="td-accion">
                  <Link to={"editarCliente/" + client.cedCliente}>
                    <button className="btn botones">
                      <img className="iconos-botones"
                        src={"../../../../../src/assets/icons/Editar.png"}
                        alt=""
                        width="40px "
                        height="40px"
                      />
                    </button>
                  </Link>
                  <button
                    className="btn botones"
                    onClick={() => {
                      confirmacion(client.idCliente);
                    }}
                  >
                    <img
                      className="iconos-botones"
                      src={"../../../../../src/assets/icons/Eliminar.png"}
                      alt=""
                      width="40px "
                      height="40px"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tbody style={trById}>
            <tr key={idCliente}>
              <td>{documento}</td>
              <td>{nombre}</td>
              <td>{correo}</td>
              <td>{direccion}</td>
              <td>{celular}</td>
              <td>
              <Link to={"editarCliente/" + id}>
                    <button className="btn botones">
                      <img className="iconos-botones"
                        src={"../../../../../src/assets/icons/Editar.png"}
                        alt=""
                        width="40px "
                        height="40px"
                      />
                    </button>
                  </Link>
                  <button
                    className="btn botones"
                    onClick={() => {
                      confirmacion(idCliente);
                      regresar()
                    }}
                  >
                    <img
                      className="iconos-botones"
                      src={"../../../../../src/assets/icons/Eliminar.png"}
                      alt=""
                      width="40px "
                      height="40px"
                    />
                  </button>
                  <button className="btn botones" onClick={regresar}>
                    {" "}
                    <img
                      className="iconos-botones"
                      src={"../../../../../src/assets/icons/regreso.png"}
                      alt=""
                      width="40px "
                      height="40px"
                    />
                  </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
