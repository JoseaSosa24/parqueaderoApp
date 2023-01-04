import React, { useEffect, useState } from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { TableClientes } from "../table/TableClientes";
import { Button } from "../Button";
import axios from "axios";
import { Mensaje } from "../Mensaje";
import swal from 'sweetalert';
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";


const uriClientes = 'http://localhost:3100/clientes'

export const Clientes = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const expresionRegular = {
    usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    documento: /^\d{9,10}$/,
    celular: /^\d{10}$/
  };

  const correcto = (e) => {
    swal({
      title: "Mensaje de éxito",
      text: "¡Cliente agregado correctamente!",
      icon: "success",
      buttons: "ok"
    })
  }

  const incorrecto = (text) => {
    swal({
      title: "Error",
      text: text,
      icon: "error",
      buttons: "ok"
    })
  }

  const agregarCliente = async (valores) => {
    //e.preventDefault()//Buscar la forma que guarde y muestre el registro sin recargar la pagina
    /* console.log(documento, nombre, correo, direccion, celular) */
    console.table(valores)
    const { documento, nombre, correo, direccion, celular } = valores
    const res = await axios.post(uriClientes, {
      "cedCliente": documento,
      "nombre": nombre,
      "correo": correo,
      "direccion": direccion,
      "celular": celular
    });
    if (res.data.estado) {
      /* res.data.message */
      correcto();
      /* console.log("Cliente agregado correctamente") */
    } else {
      incorrecto(res.data.message);
    }

  }

  return (
    <>

      <section className="registro-cliente m-4">
        <Titulo textTitulo={"Registro Cliente:"} />
        <section className="formulario d-flex align-items-center justify-content-center p-4">

          <Formik
            initialValues={{
              documento: '',
              nombre: '',
              correo: '',
              direccion: '',
              celular: ''
            }}

            validate={(valores) => {
              let errores = {};

              if (!valores.documento) {
                errores.documento = 'Por favor ingresa un documento'
              } else if (!expresionRegular.documento.test(valores.documento)) {
                errores.documento = 'El documento debe tener mínimo 9 máximo 10 digitos númericos'
              }

              if (!valores.nombre) {
                errores.nombre = 'Por favor ingresa un nombre'
              } else if (!expresionRegular.nombre.test(valores.nombre)) {
                errores.nombre = 'El nombre solo puede contener letras y espacios'
              }

              if (!valores.correo) {
                errores.correo = 'Por favor ingresa un correo'
              } else if (!expresionRegular.correo.test(valores.correo)) {
                errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
              }

              if (!valores.direccion) {
                errores.direccion = 'Por favor ingresa un direccion'
              } /*else if (!expresionRegular.direccion.test(valores.direccion)) {
                errores.direccion = 'El direccion debe contener @ ,.'
              }*/
              if (!valores.celular) {
                errores.celular = 'Por favor ingresa un celular'
              } else if (!expresionRegular.celular.test(valores.celular)) {
                errores.celular = 'El celular solo puede contener numeros'
              }
              return errores;
            }}

            onSubmit={(valores, { resetForm }) => {
              agregarCliente(valores)
              /* cambiarFormularioEnviado(true); */
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                <Form className="formulario-clientes row col-12 d-flex g-3 ">
                  <FormInput
                    classSection={"col-3"}
                    title={"Documento:"}
                    error={errors.documento}
                    touched={touched.documento}
                    tipoInput={"text"}
                    inputId={"documento"}
                    inputName="documento"
                    inputPlaceholder={"10364845"}
                    maxlength="10"
                  />
                  <FormInput
                    classSection={"col-4"}
                    title={"Nombre:"}
                    error={errors.nombre}
                    touched={touched.nombre}
                    tipoInput={"text"}
                    inputId={"nombre"}
                    inputName="nombre"
                    inputPlaceholder={"Juan Perez"}
                  />
                  <FormInput
                    classSection={"col-5"}
                    title={"Correo:"}
                    error={errors.correo}
                    touched={touched.correo}
                    tipoInput={"email"}
                    inputId={"correo"}
                    inputName="correo"
                    inputPlaceholder={"juanperez@gmail.com"}
                  />
                  <FormInput
                    classSection={"col-5"}
                    title={"Dirección :"}
                    error={errors.direccion}
                    touched={touched.direccion}
                    tipoInput={"text"}
                    inputId={"direccion"}
                    inputName="direccion"
                    inputPlaceholder={"CLL 20 A #10"}
                  />
                  <FormInput
                    classSection={"col-4"}
                    title={"Celular :"}
                    error={errors.celular}
                    touched={touched.celular}
                    tipoInput={"text"}
                    inputId={"celular"}
                    inputName="celular"
                    inputPlaceholder={"3225556898"}
                    maxlength="10"
                  />
                  <Button clase={'form-button d-flex justify-content-center col-12'}
                    classButton={'guardar form-button col-3'}
                    textButton={'Guardar'} type={'submit'} />
                </Form>
              </section>
            )}
          </Formik>
        </section>
        <TableClientes
          textoColumna1={"Documento"}
          textoColumna2={"Nombre"}
          textoColumna3={"Correo"}
          textoColumna4={"Direccion"}
          textoColumna5={"Celular"}
          textoColumna6={"Accion"}

        />
      </section>
    </>

  );

}