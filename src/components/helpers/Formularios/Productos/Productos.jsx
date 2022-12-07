import React from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { Table } from "../Table/Table";
import { TextArea } from "../TextArea";
    
export const Productos = () => {
    return (
      <section className="registro-cliente m-4">
        <Titulo textTitulo={"Registro Producto:"} />
        <section className="formulario">
          <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Nombre: "}  inputId={'nombre'} inputName={'nombre'} inputPlaceholder={'Casco'}/>
          <FormInput classInput={"item-form"} tipoInput={"number"} infomacionInput={"Precio: "} inputId={'precio'} inputName={'precio'} inputPlaceholder={'50000'} />
          <FormInput classInput={"item-form"} tipoInput={"number"} infomacionInput={"Inventario: "} inputId={'inventario'} inputName={'inventario'} inputPlaceholder={'50'}/>
          <TextArea classInput={"item-form"} idTextArea={'descripcion'} nameTextArea={'descripcion'} />
          <input className="guardar" type="button" value={"Guardar"} />
        </section>
        <section className="seccion-buscar2 d-flex mt-4">
          <Titulo textTitulo={"Productos Registrados: "} tittle={'tittle'}/>
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