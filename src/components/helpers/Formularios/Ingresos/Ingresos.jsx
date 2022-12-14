import { React, useState } from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { TableIngresos } from '../table/TableIngresos'
import axios from "axios";
import { Button } from "../Button";
import moment from "moment/moment";
import { Formik, Form, Field, ErrorMessage } from "formik";



const URI = 'http://localhost:3100/ingresos'
export const Ingresos = () => {

  let documentoCliente, placa, horas;
  const [formularioValido, setFormularioValido] = useState('false');


  const expresionRegular = {
    usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    documento: /^\d{9,10}$/,
    celular: /^\d{10}$/,
    placaMoto: /^[a-zA-Z0-9]{6}$/
  };

  const correcto = (e) => {
    swal({
      title: "Mensaje de éxito",
      text: "¡Ingreso agregado correctamente!",
      icon: "success",
      buttons: "ok"
    })

  }

  const createIngreso = async (e) => {
    /* e.preventDefault() */
    await axios.post(URI, {
      "idCliente": documentoCliente,
      "placaMoto": placa,
      "horaIngreso": moment().format("h:mm:ss"),
      "fechaIngreso": moment().format("YYYY-MM-DD"),
      "horasTotales": horas
    })
  }

  return (
    <>
      <section className="registro-cliente m-4">
        <Titulo textTitulo={"Registro Ingresos:"} />
        <section className="formulario d-flex align-items-center justify-content-center p-4">
          <Formik
            initialValues={{
              documentoCliente: '',
              placaMoto: '',
              horas: ''
            }}
            validate={(valores) => {
              let errores = {};

              if (!valores.documentoCliente) {
                errores.documentoCliente = 'Por favor ingresa un documento'
              }
              /* else if (!expresionRegular.documento.test(valores.documentoCliente)) {
                 errores.documentoCliente = 'El documento debe minimo 9 máximo 10 digitos'
               }*/
              if (!valores.placaMoto) {
                errores.placaMoto = 'Por favor ingresa un documento'
              } else if (!expresionRegular.placaMoto.test(valores.placaMoto)) {
                errores.placaMoto = 'La placa debe contener 6 caracteres'
              }
              if (!valores.horas) {
                errores.horas = "Por favor ingresa las horas";
              } else if (valores.horas < 0) {
                errores.horas = "Las horas deben ser mayor a cero";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              console.table(valores)
              documentoCliente = valores.documentoCliente
              placa = valores.placaMoto
              horas = valores.horas
              createIngreso();
              correcto();
              /* cambiarFormularioEnviado(true); */
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                <Form className="formulario-clientes row col-12 d-flex g-3 justify-content-evenly" >
                  <FormInput classSection={'col-4'}
                    title={"Documento Cliente:"}
                    error={errors.documentoCliente}
                    touched={touched.documentoCliente}
                    tipoInput={"text"}
                    inputId={"documentoCliente"}
                    inputName="documentoCliente"
                    inputPlaceholder={"10364845"}
                    maxlength="10"
                  />
                  <FormInput classSection={'col-4'}
                    title={"Placa Moto:"}
                    error={errors.placaMoto}
                    touched={touched.placaMoto}
                    tipoInput={"text"}
                    inputId={"placaMoto"}
                    inputName="placaMoto"
                    inputPlaceholder={"ABC123"}
                    maxlength="6"
                  />
                  <FormInput classSection={'col-3'}
                    title={"Horas:"}
                    error={errors.horas}
                    touched={touched.horas}
                    tipoInput={"number"}
                    inputId={"horas"}
                    inputName="horas"
                    inputPlaceholder={"2"}
                    maxlength="6"
                  />
                  <Button clase={'form-button d-flex justify-content-center col-12'}
                    classButton={'guardar form-button col-3'}
                    textButton={'Guardar'} type={'submit'} />
                </Form>
              </section>
            )}

          </Formik>
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
    </>
  );
};