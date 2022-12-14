import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { TableVentas } from '../table/TableVentas';
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Ventas = () => {
  let documentoCliente, idProducto, producto, cantidad;



  return (
    <>
      <section className="registro-venta m-4 d-flex flex-column justify-content-center">
        <Titulo textTitulo={"Registro  Venta:"} />
        <section className="formulario-venta p-4 ">
          <Formik
            initialValues={{
              documentoCliente: '',
              idProducto: '',
              producto: '',
              cantidad: ''
            }}
            validate={(valores) => {
              let errores = {};

              if (!valores.documentoCliente) {
                errores.documentoCliente = 'Por favor ingresa un documento'
              }
              /* else if (!expresionRegular.documento.test(valores.documentoCliente)) {
                 errores.documentoCliente = 'El documento debe minimo 9 máximo 10 digitos'
               }*/
              if (!valores.idProducto) {
                errores.placaMoto = 'Por favor ingresa un documento'
              }
              /*else if (!expresionRegular.placaMoto.test(valores.placaMoto)) {
                errores.placaMoto = 'La placa debe contener 6 caracteres'
              }*/
              if (!valores.cantidad) {
                errores.cantidad = "Por favor ingresa las cantidad";
              } else if (valores.cantidad < 0) {
                errores.cantidad = "Las cantidad deben ser mayor a cero";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              console.table(valores)
              /*documentoCliente = valores.documentoCliente
              placa = valores.placaMoto
              horas = valores.horas
              createIngreso();
              correcto();*/
              /* cambiarFormularioEnviado(true); */
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                <Form className="formulario-venta row col-12 d-flex g-3">
                  <FormInput classSection={'col-3'}
                    title={"Documento Cliente:"}
                    error={errors.documentoCliente}
                    touched={touched.documentoCliente}
                    tipoInput={"text"}
                    inputId={"documentoCliente"}
                    inputName="documentoCliente"
                    inputPlaceholder={"10364845"}
                  />
                  <FormInput classSection={'col-2'}
                    title={"Id cliente:"}
                    error={errors.idProducto}
                    touched={touched.idProducto}
                    tipoInput={"number"}
                    inputId={"ididProducto"}
                    inputName="idProducto"
                    inputPlaceholder={"2"}
                  />
                  <FormInput classSection={'col-2'}
                    title={"Cantidad:"}
                    error={errors.idProducto}
                    touched={touched.idProducto}
                    tipoInput={"number"}
                    inputId={"cantidad"}
                    inputName="cantidad"
                    inputPlaceholder={"1"}
                  />
                  <Button clase={'form-button d-flex justify-content-center col-12'}
                    classButton={'guardar form-button col-3'}
                    textButton={'Guardar'} type={'submit'} />
                </Form>
              </section>
            )}
          </Formik>
        </section>


        <TableVentas
          textoColumna1={"Id cliente"}
          textoColumna2={"Nombre Producto"}
          textoColumna3={"Fecha Venta"}
          textoColumna4={"Cantidad"}
          textoColumna5={"Valor"}
          textoColumna6={"Accion"}
        />
        
      </section >
    </>
  )
}
