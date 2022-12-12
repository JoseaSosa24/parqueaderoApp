import React, { useState } from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { TableProductos } from "../table/TableProductos";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import axios from "axios";


const URI = 'http://localhost:3100/productos'
export const Productos = () => {

  const [nombreProducto, setNombreProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setdescripcion] = useState('');
  const [inventario, setInventario] = useState('');
  const createProducto = async (e) => {
    /* e.preventDefault(); */
    await axios.post(URI, {
      "nombreProducto": nombreProducto,
      "precio": precio,
      "descripcion": descripcion,
      "inventario": inventario
    });

  }


  return (
    <section className="registro-cliente m-4 d-flex flex-column justify-content-center">
      <Titulo textTitulo={"Registro Producto:"} />
      <section className="formulario d-flex align-items-center justify-content-center p-4">
        <form className="formulario-clientes row col-12 d-flex g-3" onSubmit={createProducto}>
          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Nombre: "} inputId={'nombre'} inputName={'nombre'} inputPlaceholder={'Casco'}
            onChange={(e) => { setNombreProducto(e.target.value) }} />
          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"number"} infomacionInput={"Precio: "} inputId={'precio'} inputName={'precio'} inputPlaceholder={'50000'}
            onChange={(e) => { setPrecio(e.target.value) }} />
          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"number"} infomacionInput={"Inventario: "} inputId={'inventario'} inputName={'inventario'} inputPlaceholder={'50'}
            onChange={(e) => { setInventario(e.target.value) }} />
          <TextArea classSection={'col-12'} classInput={"item-form"} idTextArea={'descripcion'} nameTextArea={'descripcion'}
            onChange={(e) => { setdescripcion(e.target.value) }} />
          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'guardar form-button col-3'} textButton={'Guardar'} type={'submit'} />
        </form>
      </section>

      <section className="seccion-buscar2 d-flex mt-4">
        <Titulo textTitulo={"Productos Registrados: "} tittle={'tittle'} />
        <Buscar inputbuscar={"input-buscar fst-italic"} search={'Ingrese Id Producto'} />
      </section>
      <TableProductos
        textoColumna1={"Id Producto"}
        textoColumna2={"Nombre"}
        textoColumna3={"Precio"}
        textoColumna4={"Descripción"}
        textoColumna5={"Iventario"}
        textoColumna6={"Accion"}
      />
    </section>
  );
};