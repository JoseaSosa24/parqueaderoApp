import React from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { Table } from "../Table/Table";
import { TableClientes } from "../table/TableClientes";

export const Clientes = () => {
  return (
    <section className="registro-cliente m-4">
      <Titulo textTitulo={"Registro Cliente:"} />
      <section className="formulario ">
        <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Documento: "} inputId={'documento'} inputName={'documento'} inputPlaceholder={'10364845'} />
        <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Nombre: "} inputId={'nombre'} inputName={'nombre'} inputPlaceholder={'Juan Perez'} />
        <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Correo: "} inputId={'correo'} inputName={'correo'} inputPlaceholder={'juanperez@gmail.com'}/>
        <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Direccion: "} inputId={'direccion'} inputName={'direccion'} inputPlaceholder={'CRRA 2 CL SUR B'}/>
        <FormInput classInput={"item-form"} tipoInput={"text"} infomacionInput={"Celular: "} inputId={'celular'} inputName={'celular'} inputPlaceholder={'3225556898'}/>
        <input className="guardar" type="button" value={"Guardar"} />
      </section>
      <section className="seccion-buscar d-flex mt-4 ">
        <Titulo textTitulo={"Clientes Registrados: "} />
        <Buscar inputbuscar={"input-buscar fst-italic"} search={'Ingrese documento'}/>
      </section>

      <TableClientes 
        textoColumna1={"Documento"}
        textoColumna2={"Nombre"}
        textoColumna3={"Correo"}
        textoColumna4={"Direccion"}
        textoColumna5={"Celular"}
        textoColumna6={"Accion"}
        
      />


      {/* <Table
        textoColumna1={"Documento"}
        textoColumna2={"Nombre"}
        textoColumna3={"Correo"}
        textoColumna4={"Direccion"}
        textoColumna5={"Celular"}
        textoColumna6={"Accion"}
      /> */}
    </section>
  );
};
