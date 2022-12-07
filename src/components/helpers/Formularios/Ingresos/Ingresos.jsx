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
          <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Documento Cliente: "} inputId={'documentoCliente'} inputName={'documentoCliente'} inputPlaceholder={'10364845'} />
          <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Placa Moto: "}  inputId={'placaMonto'} inputName={'placaMoto'} inputPlaceholder={'ABC123'} />
          <FormInput classInput={"item-form"} tipoInput={"date"} infomacionInput={"Fecha Ingreso: "}  inputId={'fechaIngreso'} inputName={'fechaIngreso'} inputPlaceholder={'11/12/2022'} />
          <FormInput classInput={"item-form"} tipoInput={"time"} infomacionInput={"Hora Ingreso: "}  inputId={'horaIngreso'} inputName={'horaIngreso'} inputPlaceholder={'HH:MM'} />
          <FormInput classInput={"item-form"} tipoInput={"number"} infomacionInput={"Horas: "}  inputId={'horas'} inputName={'horas'} inputPlaceholder={'2'} />
          <input className="guardar" type="button" value={"Guardar"} />
        </section>
        <section className="seccion-buscar d-flex mt-4 ">
          <Titulo textTitulo={"Registros Ingresos: "} tittle={'me-4'}/>
          <Buscar inputbuscar={"input-buscar fst-italic"} search={'Ingrese placa'} button={'ms-3'}/>
        </section>
        <Table
          textoColumna1={"Documento Cliente"}
          textoColumna2={"Placa Moto"}
          textoColumna3={"Fecha Ingreso"}
          textoColumna4={"Hora Ingreso"}
          textoColumna5={"Horas"}
          textoColumna6={"Accion"}
        />
      </section>
    );
  };