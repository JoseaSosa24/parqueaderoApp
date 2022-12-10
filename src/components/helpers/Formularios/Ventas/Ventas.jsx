import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { TableVentas } from '../table/TableVentas';

export const Ventas = () => {


  return (
    <section className="registro-venta m-4 d-flex flex-column justify-content-center">
      <Titulo textTitulo={"Registro  Venta:"} />
      <section className="formulario-venta p-4">
        <form className="formulario-venta row col-12 d-flex g-3">
          <FormInput classSection={'col-3'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Documento cliente: "} inputId={'documento'} inputName={'documento'} inputPlaceholder={'10364845'} />
          <FormInput classSection={'col-2'} classInput={"item-form"} tipoInput={"number"} infomacionInput={"Id producto:"} inputId={'idProduto'} inputName={'idProduto'} inputPlaceholder={'1'} />
          <FormInput classSection={'col-4'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Nombre producto: "} inputId={'producto'} inputName={'producto'} inputPlaceholder={'casco'} />
          <section className='cantidad-fecha'>
            <FormInput classSection={'col-1'} classInput={"item-form"} tipoInput={"number"} infomacionInput={"Cantidad: "} inputId={'Cantidad'} inputName={'Cantidad'} inputPlaceholder={'1'} />
            <FormInput classSection={'col-3'} classInput={"item-form"} tipoInput={"text"} infomacionInput={"Fecha Venta: "} inputId={'fechaVenta'} inputName={'fechaVenta'} inputPlaceholder={'11/12/2022'} />
          </section >
          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'guardar form-button col-3'} textButton={'Guardar'} type={'submit'} />
        </form>
      </section>

      <section className="seccion-buscar-cliente d-flex mt-4">
        <Titulo textTitulo={"Ventas: "} tittle={'me-4'} />
        <Buscar inputbuscar={"input-buscar fst-italic"} search={'Documento cliente'} />
      </section>
      <section>
        
      </section>
      <TableVentas
        textoColumna1={"Id cliente"}
        textoColumna2={"Nombre Producto"}
        textoColumna3={"Fecha Venta"}
        textoColumna4={"Cantidad"}
        textoColumna5={"Valor"}
        textoColumna6={"Accion"}
      />
    </section>
  )
}
