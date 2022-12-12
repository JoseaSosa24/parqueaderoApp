import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const URI = 'http://localhost:3100/productos';

export const TableProductos = ({ textoColumna1, textoColumna2, textoColumna3, textoColumna4, textoColumna5, textoColumna6, tdId }) => {

    const [productos, setProductos] = useState([]);
    const getProductos = async () => {
        const res = await axios.get(URI)
        setProductos(res.data)
    }


    const deleteProductos = async (id) => {
        swal({
            title: "Eliminar",
            text: "¿Estás seguro de eliminar este producto?",
            icon: "warning",
            buttons: ["No", "Sí"]
        }).then(async value => {
            if (value) {
                const res = await axios.delete(`${URI}/${id}`);
                if (res.data.estado) {
                    swal({
                        title: "Confirmación Eliminación",
                        text: res.data.message,
                        icon: "success"
                    })
                } else {
                    console.log(res.data.messageError)
                    swal({
                        title: "Error al eliminar",
                        text: ""+res.data.message,
                        icon: "error"
                    })
                }
                getProductos();
            }
        })


    }

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
    }, [])
    return (
        <section className="tablaRegistros d-flex justify-content-center align-items-start ">
            <table className="" id="tabla">
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
                    {productos.map((producto) => (
                        <tr key={producto.idProducto}>
                            <td>{producto.idProducto}</td>
                            <td>{producto.nombreProducto}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.inventario}</td>
                            <td>
                                <button className="btn btn-success">Editar</button>
                                <button className="btn btn-danger" onClick={() => { deleteProductos(producto.idProducto) }}>Delete</button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </section>
    );
};