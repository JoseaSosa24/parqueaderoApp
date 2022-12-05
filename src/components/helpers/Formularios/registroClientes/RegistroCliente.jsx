import React from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { Forms } from "../Forms";

export const RegistroCliente = () => {
  return (
    <section className="registro-cliente m-4">
      <Titulo textTitulo={"Registro Cliente:"} />
      <section className="formulario d-flex flex-column gap-2 ">
        <section className="d-flex align-items-center justify-content-around mt-3">
          <FormInput classInput={"item-form"} infomacionInput={"Documento: "} />
          <FormInput classInput={"item-form"} infomacionInput={"Nombre: "} />
          <FormInput classInput={"item-form"} infomacionInput={"Correo: "} />
        </section>
        <section className="input-botton d-flex mb-4">
          <FormInput classInput={"item-form"} infomacionInput={"Direccion: "} />
          <FormInput classInput={"item-form"} infomacionInput={"Celular: "} />
        </section>
        <input className="guardar" type="button" value={"Guardar"} />
      </section>
      <section className="seccion-buscar d-flex mt-4 ">
        <Titulo textTitulo={"Clientes registrados: "} />
        <Buscar inputbuscar={"input-buscar fst-italic"}buscadorInput={"Ingrese documento"}
        />
      </section>
      <Forms />
    </section>
  );
};
