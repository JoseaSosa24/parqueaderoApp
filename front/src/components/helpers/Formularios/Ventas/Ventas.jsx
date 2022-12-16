import React, { useEffect } from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { TableVentas } from '../table/TableVentas';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

/* constuyendo() */






export const Ventas = () => {
  const navigate = useNavigate()
  let documentoCliente, idProducto, producto, cantidad;
  useEffect(() => {
    construyendo()
  }, []);

  const construyendo = (e) => {
    swal({
      title: "Modúlo Ventas en construcción",
      text: "El modúlo ventas está en proceso de desarrollo",
      icon: "info",
      buttons: "ok",
      closeOnClickOutside: false,
      closeOnEsc: false,
      
    }).then((value) => {
      if (value) {
        navigate('/');
       
      }
    })
  }
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
              cantidad: '',
              nombreProducto: ''
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
                errores.idProducto = 'Por favor ingresa un id producto'
              }
              if (!valores.nombreProducto) {
                errores.nombreProducto = 'Por favor ingresa un nombre producto'
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
                  <FormInput classSection={'col-3'}
                    title={"Id Producto:"}
                    error={errors.idProducto}
                    touched={touched.idProducto}
                    tipoInput={"number"}
                    inputId={"ididProducto"}
                    inputName="idProducto"
                    inputPlaceholder={"2"}
                  />
                  <FormInput classSection={'col-4'}
                    title={"Nombre Producto:"}
                    error={errors.nombreProducto}
                    touched={touched.nombreProducto}
                    tipoInput={"text"}
                    inputId={"nombreProducto"}
                    inputName="nombreProducto"
                    inputPlaceholder={"casco"}
                  />
                  <section className='cantidad'>
                  <FormInput classSection={'col-1'}
                    title={"Cantidad:"}
                    error={errors.cantidad}
                    touched={touched.cantidad}
                    tipoInput={"number"}
                    inputId={"cantidad"}
                    inputName="cantidad"
                    inputPlaceholder={"1"} />
                  </section>
                  
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
