import React from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { Table } from "../Table/Table";
    
export const Ingresos = () => {
    return (
      <section className="registro-cliente m-4">
        <Titulo textTitulo={"Registro Ingresos:"} />
        <section className="formulario ">
          <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Documento Cliente: "} />
          <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Placa Moto: "} />
          <FormInput classInput={"item-form"} tipoInput={"date"} infomacionInput={"Fecha Ingreso: "} />
          <FormInput classInput={"item-form"} tipoInput={"time"} infomacionInput={"Hora Ingreso: "} />
          <FormInput classInput={"item-form"} tipoInput={"number"} infomacionInput={"Horas: "} />
          <input className="guardar" type="button" value={"Guardar"} />
        </section>
        <section className="seccion-buscar d-flex mt-4 ">
          <Titulo textTitulo={"Registros Ingresos: "} />
          <Buscar inputbuscar={"input-buscar fst-italic"} search={'Ingrese placa'}/>
        </section>
        <Table
          Td1={"Documento Cliente"}
          Td2={"Placa Moto"}
          Td3={"Fecha Ingreso"}
          Td4={"Hora Ingreso"}
          Td5={"Horas"}
          Td6={"Accion"}
        />
      </section>
    );
  };