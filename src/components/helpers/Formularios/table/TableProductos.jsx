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
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </section>
    );
};