import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const URI = 'http://localhost:3100/productos';

export const TableVentas = ({ textoColumna1, textoColumna2, textoColumna3, textoColumna4, textoColumna5, textoColumna6, tdId }) => {

    const [ventas, setVentas] = useState([]);
    const getVentas = async () => {
        const res = await axios.get(URI)
        setVentas(res.data)
    }

    useEffect(() => {
        getVentas();
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
                    {/* {ventas.map((venta) => (
                        <tr key={venta.idProducto}>
                            <td>{venta.idProducto}</td>
                            <td>{venta.nombreProducto}</td>
                            <td>{venta.precio}</td>
                            <td>{venta.descripcion}</td>
                            <td>{venta.inventario}</td>
                        </tr>
                    )
                    )} */}
                </tbody>
            </table>
        </section>
    );
};