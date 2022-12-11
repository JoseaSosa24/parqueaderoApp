import { React, useState } from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { TableIngresos } from '../table/TableIngresos'
import axios from "axios";
import { Button } from "../Button";
import moment from "moment/moment";




const URI = 'http://localhost:3100/ingresos'
export const Ingresos = () => {

  const [idCliente, setIdCliente] = useState({campo:'',valido:null});
  const [placaMoto, setPlacaMoto] = useState({campo:'',valido:null});
  const [fechaIngreso, setFechaIngreso] = useState({campo:'',valido:null});
  const [horaIngreso, setHoraIngreso] = useState('');
  const [horasTotales, setHorasTotales] = useState('');

  const createIngreso = async () => {
    await axios.post(URI, {
      "idCliente": idCliente,
      "placaMoto": placaMoto,
      "horaIngreso": horaIngreso,
      "fechaIngreso": fechaIngreso,
      "horasTotales": horasTotales
    })
  }

  return (
    <section className="registro-cliente m-4">
      <Titulo textTitulo={"Registro Ingresos:"} />
      <section className="formulario d-flex align-items-center justify-content-center p-4">
        <form className="formulario-clientes row col-12 d-flex g-3 " onSubmit={createIngreso}>

          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"text"}
            infomacionInput={"Documento Cliente: "} inputId={'documentoCliente'}
            inputName={'documentoCliente'} inputPlaceholder={'10364845'}
            onChange={(e) => { setIdCliente(e.target.value) }} required />

          <FormInput classSection={'col-5'} classInput={"item-form"} tipoInput={"text"}
            infomacionInput={"Placa Moto: "} inputId={'placaMonto'} inputName={'placaMoto'}
            inputPlaceholder={'ABC123'}
            onChange={(e) => { setPlacaMoto(e.target.value) }} required/>

          <FormInput classSection={'col-3'} classInput={"item-form"} tipoInput={"date"}
            infomacionInput={"Fecha Ingreso: "} inputId={'fechaIngreso'}
            inputName={'fechaIngreso'} inputPlaceholder={'11/12/2022'}
            onChange={(e) => { setFechaIngreso(moment(e.target.value).format("DD/MM/YYYY")) }} required/>

          <FormInput classSection={'col-3'} classInput={"item-form"}
            tipoInput={"time"} infomacionInput={"Hora Ingreso: "} inputId={'horaIngreso'}
            inputName={'horaIngreso'} inputPlaceholder={'HH:MM'}
            onChange={(e) => { setHoraIngreso(e.target.value) }} required/>

          <FormInput classSection={'col-2'} classInput={"item-form"} tipoInput={"text"}
            infomacionInput={"Horas: "} inputId={'horas'} inputName={'horas'} inputPlaceholder={'2'}
            onChange={(e) => { setHorasTotales(e.target.value) }} required/>

          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'guardar form-button col-3'} textButton={'Guardar'} type={'submit'} />
        </form>
      </section>

      <section className="seccion-buscar d-flex mt-4 ">
        <Titulo textTitulo={"Registros Ingresos: "} tittle={'me-4'} />
        <Buscar inputbuscar={"input-buscar fst-italic"} search={'Ingrese placa'} button={'ms-3'} />
      </section>
      <TableIngresos
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