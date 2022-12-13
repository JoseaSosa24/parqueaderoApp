import React, { useEffect, useState } from "react";
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Buscar } from "../Buscar";
import { TableClientes } from "../table/TableClientes";
import { Button } from "../Button";
import axios from "axios";
import { Mensaje } from "../Mensaje";
import swal from 'sweetalert';
import { Formik, Form, Field, ErrorMessage } from "formik";


const URI = 'http://localhost:3100/clientes'
export const Clientes = () => {
  const [documento, setDocumento] = useState();
  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();
  const [direccion, setDireccion] = useState();
  const [celular, setCelular] = useState();
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const expresionRegular = {
    usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
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


  const createCliente = async (e) => {
    //e.preventDefault()//Buscar la forma que guarde y muestre el registro sin recargar la pagina
    console.log(documento, nombre, correo, direccion, celular)
    const res = await axios.post(URI, {
      "cedCliente": documento,
      "nombre": nombre,
      "correo": correo,
      "direccion": direccion,
      "celular": celular
    });

    if (res.data.estado == true) {
      res.data.message
      /* console.log("Cliente agregado correctamente") */
    } else {
      res.data.message
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
                errores.documento = 'El documento debe minimo 9 máximo 10 digitos'
              }

              if (!valores.nombre) {
                errores.nombre = 'Por favor ingresa un nombre'
              } else if (!expresionRegular.nombre.test(valores.nombre)) {
                errores.nombre = 'El nombre solo puede contener letras y espacios'
              }

              if (!valores.correo) {
                errores.correo = 'Por favor ingresa un correo'
              } else if (!expresionRegular.correo.test(valores.correo)) {
                errores.correo = 'El correo solo puede contener letras y espacios'
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
              console.table(valores)
              setDocumento(valores.documento)
              console.log(documento)
              setNombre(valores.nombre)
              console.log(nombre)
              setCorreo(valores.correo)
              console.log(correo)
              setDireccion(valores.direccion)
              console.log(direccion)
              setCelular(valores.celular)
              console.log(celular)
              createCliente()
              correcto();
              cambiarFormularioEnviado(true);
              resetForm();
            }}
          >
            {({ errors }) => (
              <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                <Form className="formulario-clientes row col-12 d-flex g-3 ">
                  <section className="col-3">
                    <h3 className="text-white fs-5" >Documento:</h3>
                    <Field
                      className="form-control item-form"
                      type="text"
                      id="documento"
                      name="documento"
                      placeholder="10364845"
                      maxLength="10"
                    />
                    <ErrorMessage name="documento" component={() => (<section className="error text-danger">{errors.documento}</section>)} />
                  </section>
                  <section className="col-4">
                    <h3 className="text-white fs-5" >Nombre:</h3>
                    <Field
                      className="form-control item-form"
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Juan Perez"
                    />
                    <ErrorMessage name="nombre" component={() => (<section className="error text-danger">{errors.nombre}</section>)} />
                  </section>
                  <section className="col-5">
                    <h3 className="text-white fs-5" >Correo:</h3>
                    <Field
                      className="form-control item-form"
                      type="email"
                      id="correo"
                      name="correo"
                      placeholder="juanperez@gmail.com"
                    />
                    <ErrorMessage name="correo" component={() => (<section className="error text-danger">{errors.correo}</section>)} />
                  </section>
                  <section className="col-5">
                    <h3 className="text-white fs-5" >Dirección:</h3>
                    <Field
                      className="form-control item-form"
                      type="text"
                      id="direccion"
                      name="direccion"
                      placeholder="CRRA 2 CL SUR B"
                    />
                    <ErrorMessage name="direccion" component={() => (<section className="error text-danger">{errors.direccion}</section>)} />
                  </section>
                  <section className="col-4">
                    <h3 className="text-white fs-5" >Celular: </h3>
                    <Field
                      className="form-control item-form"
                      type="text"
                      id="celular"
                      name="celular"
                      placeholder="3225556898"
                      maxLength="10"
                    />
                    <ErrorMessage name="celular" component={() => (<p className="error text-danger">{errors.celular}</p>)} />
                  </section>
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