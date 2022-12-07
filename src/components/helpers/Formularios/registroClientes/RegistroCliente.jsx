import React from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { Table } from "../table/Table";

export const RegistroCliente = () => {
  return (
    <section className="registro-cliente m-4">
      <Titulo textTitulo={"Registro Cliente:"} />
      <section className="formulario ">
        <FormInput classInput={"item-form"} infomacionInput={"Documento: "} />
        <FormInput classInput={"item-form"} infomacionInput={"Nombre: "} />
        <FormInput classInput={"item-form"} infomacionInput={"Correo: "} />
        <FormInput classInput={"item-form"} infomacionInput={"Direccion: "} />
        <FormInput classInput={"item-form"} infomacionInput={"Celular: "} />
        <input className="guardar" type="button" value={"Guardar"} />
      </section>
      <section className="seccion-buscar d-flex mt-4 ">
        <Titulo textTitulo={"Clientes registrados: "} />
        <Buscar inputbuscar={"input-buscar fst-italic"} search={'Ingrese documento'}/>
      </section>
      <Table
        Td1={"Documento"}
        Td2={"Nombre"}
        Td3={"Correo"}
        Td4={"Direccion"}
        Td5={"Celular"}
        Td6={"Accion"}
      />
    </section>
  );
};
