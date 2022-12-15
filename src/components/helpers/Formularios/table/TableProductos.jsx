import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Titulo } from "../Titulo";
import { Buscar } from "../Buscar";
import { Link } from "react-router-dom";
const URI = "http://localhost:3100/productos";

export const TableProductos = ({
  textoColumna1,
  textoColumna2,
  textoColumna3,
  textoColumna4,
  textoColumna5,
  textoColumna6,
  tdId,
}) => {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    const res = await axios.get(URI);
    setProductos(res.data);
  };

  const deleteProductos = async (id) => {
    swal({
      title: "Eliminar",
      text: "¿Estás seguro de eliminar este producto?",
      icon: "warning",
      buttons: ["No", "Sí"],
      dangerMode: true
    }).then(async (value) => {
      if (value) {
        const res = await axios.delete(`${URI}/${id}`);
        if (res.data.estado) {
          swal({
            title: "Confirmación Eliminación",
            text: res.data.message,
            icon: "success",
          });
        } else {
          console.log(res.data.messageError);
          swal({
            title: "Error al eliminar",
            text: "" + res.data.message,
            icon: "error",
          });
        }
        getProductos();
      }
    });
  };

  /*  const confirmacion = (id) => {
         swal({
             title: "Eliminar",
             text: "¿Estás seguro de eliminar este producto?",
             icon: "warning",
             buttons: ["No", "Sí"]
         }).then(value => {
             if (value) {
                 deleteProductos(id)
                 swal({
                     title: "Confirmación Eliminación",
                     text: "¡Producto eliminado correctamente!",
                     icon: "success"
                 })
             }
         })
     } */

  useEffect(() => {
    getProductos();
  }, []);

  const [idProducto, setIdProducto] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [inventario, setInventario] = useState("");
  const [id, setId] = useState("");
  const [trBody, setTrBody] = useState({ display: "" });
  const [trById, setTrById] = useState({ display: "none" });

  const buscarPorId = async (e) => {
    e.preventDefault();

    console.log(id);
    let res = await axios.get(URI + "/" + id);
    console.log(res);
    setIdProducto(res.data.idProducto);
    console.log(res.data.idProducto);
    setNombreProducto(res.data.nombreProducto);
    console.log(res.data.nombreProducto);
    setPrecio(res.data.precio);
    console.log(res.data.precio);
    setInventario(res.data.inventario);
    console.log(res.inven);
    setDescripcion(res.data.descripcion);
    console.log(res.data.descripcion);

    setTrBody({ display: "none" });
    setTrById({ display: "" });
  };

  const pulsarBuscar = (e) => {
    setId(e.target.value);
  };

  const regresar = () => {
    setTrBody({ display: "" });
    setTrById({ display: "none" });
  };

  return (
    <>
      <section className="seccion-buscar2 d-flex mt-4">
        <Titulo textTitulo={"Listado Productos"} tittle={"tittle"} />
        <button className="btn botones-2" onClick={getProductos
        }><img
        className="iconos-botones-cargar"
          src={"../../../../../src/assets/icons/girar.png"}
          alt=""
          width="40px "
          height="40px"
        /></button>
        <Buscar
          inputbuscar={"input-buscar fst-italic"}
          search={"Ingrese Id Producto"}
          onSubmit={buscarPorId}
          onChange={pulsarBuscar}
        />
      </section>
      <section className="tabla-registros d-flex justify-content-center align-items-start ">
        <table className="" id="tabla">
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
            {productos.map((producto) => (
              <tr key={producto.idProducto}>
                <td>{producto.idProducto}</td>
                <td>{producto.nombreProducto}</td>
                <td>{producto.precio}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.inventario}</td>
                <td>
                  <Link to={"editarProducto/"+producto.idProducto}>
                    <button className="btn botones">
                      <img
                        className="iconos-botones"
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
                      deleteProductos(producto.idProducto);
                    }}
                  >
                    {" "}
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
            <tr>
              <td>{idProducto}</td>
              <td>{nombreProducto}</td>
              <td>{precio}</td>
              <td>{descripcion}</td>
              <td>{inventario}</td>
              <td>
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
