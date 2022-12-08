import React from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { Table } from "../Table/Table";
import { TextArea } from "../TextArea";
import { Button } from "../Button";

export const Productos = () => {
  return (
    <section className="registro-cliente m-4 d-flex flex-column justify-content-center">
      <Titulo textTitulo={"Registro Producto:"} />
      <section className="formulario d-flex align-items-center justify-content-center p-4">
        <form className="formulario-clientes row col-12 d-flex g-3">
          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Nombre: "} inputId={'nombre'} inputName={'nombre'} inputPlaceholder={'Casco'} />
          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"number"} infomacionInput={"Precio: "} inputId={'precio'} inputName={'precio'} inputPlaceholder={'50000'} />
          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"number"} infomacionInput={"Inventario: "} inputId={'inventario'} inputName={'inventario'} inputPlaceholder={'50'} />
          <TextArea classSection={'col-12'} classInput={"item-form"} idTextArea={'descripcion'} nameTextArea={'descripcion'} />
          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'guardar form-button col-3'} textButton={'Guardar'} type={'submit'} />
        </form>
      </section>

      <section className="seccion-buscar2 d-flex mt-4">
        <Titulo textTitulo={"Productos Registrados: "} tittle={'tittle'} />
        <Buscar inputbuscar={"input-buscar fst-italic"} search={'Ingrese Id Producto'} />
      </section>
      <Table
        textoColumna1={"Id Producto"}
        textoColumna2={"Nombre"}
        textoColumna3={"Precio"}
        textoColumna4={"Descripcion"}
        textoColumna5={"Iventario"}
        textoColumna6={"Accion"}
      />
    </section>
  );
};