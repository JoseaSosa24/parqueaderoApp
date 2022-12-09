import React from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { TableClientes } from "../table/TableClientes";
import { Button } from "../Button";
import axios from "axios";
import { useState } from "react";

const URI = 'http://localhost:3100/clientes'
export const Clientes = () => {
  

  const [documento, setDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');


  const createCliente = async(e)=>{

    await axios.post(URI, {
      "cedCliente": `${documento}`, 
      "nombre": `${nombre}`, 
      "correo":`${correo}`, 
      "direccion": `${direccion}`, 
      "celular":`${celular}`
    });

  }

  
  return (
    <section className="registro-cliente m-4">
      <Titulo textTitulo={"Registro Cliente:"} />
      <section className="formulario d-flex align-items-center justify-content-center p-4">
        <form className="formulario-clientes row col-12 d-flex g-3 " onSubmit={createCliente}>

          <FormInput classSection={'col-3'} classInput={"item-form"} tipoInput={"text"} 
          infomacionInput={"Documento: "} inputId={'documento'} inputName={'documento'} inputPlaceholder= {'10364845'} 
            onChange = {(e)=>{setDocumento(e.target.value)}} />

          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"text"} 
          infomacionInput={"Nombre: "} inputId={'nombre'} inputName={'nombre'} inputPlaceholder={'Juan Perez'}
           onChange = {(e)=>{setNombre(e.target.value)}}/>

          <FormInput classSection={'col-5'} classInput={"item-form"} tipoInput={"text"} 
          infomacionInput={"Correo: "} inputId={'correo'} inputName={'correo'} inputPlaceholder={'juanperez@gmail.com'} 
           onChange = {(e)=>{setCorreo(e.target.value)}}/>

          <FormInput classSection={'col-5'} classInput={"item-form"} tipoInput={"text"} 
          infomacionInput={"Direccion: "} inputId={'direccion'} inputName={'direccion'} inputPlaceholder={'CRRA 2 CL SUR B'} 
           onChange = {(e)=>{setDireccion(e.target.value)}}/>

          <FormInput classSection={'col-3'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Celular: "} 
          inputId={'celular'} inputName={'celular'} inputPlaceholder={'3225556898'}  
          onChange = {(e)=>{setCelular(e.target.value)}} />

          <Button  clase={'form-button d-flex justify-content-center col-12'} classButton={'guardar form-button col-3'} 
          textButton={'Guardar'} type={'submit'} />
        </form>
      </section>

      <section className="seccion-buscar d-flex mt-4 ">
        <Titulo textTitulo={"Clientes Registrados: "} />
        <Buscar inputbuscar={"input-buscar fst-italic"} search={'Ingrese documento'} />
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
