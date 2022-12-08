import React from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { Table } from "../Table/Table";
import { Button } from "../Button";


export const Clientes = () => {
  return (
    <section className="registro-cliente m-4">
      <Titulo textTitulo={"Registro Cliente:"} />
      <section className="formulario d-flex align-items-center justify-content-center p-4">
        <form className="formulario-clientes row col-12 d-flex g-3 formulario-clientes">
          <FormInput classSection={'col-3'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Documento: "} inputId={'documento'} inputName={'documento'} inputPlaceholder={'10364845'} />
          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Nombre: "} inputId={'nombre'} inputName={'nombre'} inputPlaceholder={'Juan Perez'} />
          <FormInput classSection={'col-5'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Correo: "} inputId={'correo'} inputName={'correo'} inputPlaceholder={'juanperez@gmail.com'} />
          <FormInput classSection={'col-5'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Direccion: "} inputId={'direccion'} inputName={'direccion'} inputPlaceholder={'CRRA 2 CL SUR B'} />
          <FormInput classSection={'col-3'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Celular: "} inputId={'celular'} inputName={'celular'} inputPlaceholder={'3225556898'} />
          <Button  clase={'form-button d-flex justify-content-center col-12'} classButton={'guardar form-button col-3'} textButton={'Enviar'} type={'submit'}/>
          
        </form>
      </section>

      <section className="seccion-buscar d-flex mt-4 ">
        <Titulo textTitulo={"Clientes Registrados: "} />
        <Buscar inputbuscar={"input-buscar fst-italic"} search={'Ingrese documento'} />
      </section>
      <Table
        textoColumna1={"Documento"}
        textoColumna2={"Nombre"}
        textoColumna3={"Correo"}
        textoColumna4={"Direccion"}
        textoColumna5={"Celular"}
        textoColumna6={"Accion"}
      />
    </section>
  );
};
