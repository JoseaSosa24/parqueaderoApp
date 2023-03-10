import React, { useState } from "react";
import { Titulo } from "../Titulo";
import { TableProductos } from "../table/TableProductos";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormInput } from "../FormInput";

const uriProductos = "http://localhost:3100/productos";
export const Productos = () => {
  const [formularioCompleto, setFormularioCompleto] = useState(false);

  const crearProducto = async (valores) => {
    /* e.preventDefault(); */
    const { nombreProducto, precio, descripcion, inventario } = valores
    const res = await axios.post(uriProductos, {
      "nombreProducto": nombreProducto,
      "precio": precio,
      "descripcion": descripcion,
      "inventario": inventario,
    });
    if (res.data.estado) {
      /* res.data.message */
      correcto();
      /* console.log("Cliente agregado correctamente") */
    } else {
      incorrecto(res.data.message);
    }
  };

  const expresionRegular = {
    usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    documento: /^\d{9,10}$/,
    celular: /^\d{10}$/,
  };

  const correcto = (e) => {
    swal({
      title: "Mensaje de éxito",
      text: "¡Producto agregado correctamente!",
      icon: "success",
      buttons: "ok",
    });
  };

  const incorrecto = (text) => {
    swal({
      title: "Error",
      text: text,
      icon: "error",
      buttons: "ok"
    })
  }


  return (
    <>
      <section className="registro-producto m-4 d-flex flex-column justify-content-center">
        <Titulo textTitulo={"Registro Producto:"} />

        <section className="formulario d-flex align-items-center justify-content-center p-4">
          <Formik
            initialValues={{
              nombreProducto: '',
              precio: '',
              inventario: '',
              descripcion: '',
            }}
            validate={(valores) => {
              let errores = {};

              if (!valores.nombreProducto) {
                errores.nombreProducto = "Por favor ingresa un producto";
              } else if (
                !expresionRegular.nombre.test(valores.nombreProducto)
              ) {
                errores.nombreProducto = "El producto debe minimo 3 caracteres";
              }

              if (!valores.precio) {
                errores.precio = "Por favor ingresa un precio";
              } else if (valores.precio < 0) {
                errores.precio = "El precio debe ser mayor a cero";
              }
              if (!valores.inventario) {
                errores.inventario = "Por favor ingresa un inventario";
              } else if (valores.inventario < 0) {
                errores.inventario = "El inventario debe ser mayor a cero";
              }
              console.log(valores.descripcion)
              if (!valores.descripcion) {
                errores.descripcion = "Por favor ingresa una descripcion";
              } /*else if (!expresionRegular.direccion.test(valores.direccion)) {
              errores.direccion = 'El direccion debe contener @ ,.'
            }*/

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              crearProducto(valores);
              /* cambiarFormularioEnviado(true); */
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                <Form className="formulario-clientes row col-12 d-flex g-3 ">
                  <FormInput
                    classSection={"col-5"}
                    title={"Nombre Producto:"}
                    error={errors.nombreProducto}
                    touched={touched.nombreProducto}
                    tipoInput={"text"}
                    inputId={"nombreProducto"}
                    inputName="nombreProducto"
                    inputPlaceholder={"Casco"}
                  />
                  <FormInput
                    classSection={"col-4"}
                    title={"Precio:"}
                    error={errors.precio}
                    touched={touched.precio}
                    tipoInput={"number"}
                    inputId={"precio"}
                    inputName="precio"
                    inputPlaceholder={"50000"}
                  />
                  <FormInput
                    classSection={"col-3"}
                    title={"Inventario:"}
                    error={errors.inventario}
                    touched={touched.inventario}
                    tipoInput={"number"}
                    inputId={"inventario"}
                    inputName="inventario"
                    inputPlaceholder={"50"}
                  />
                  <section className={"textarea col-12"}>
                    <h3 className={!(errors.descripcion && touched.descripcion) ? "text-white fs-5" : "text-danger fs-5"}>Descripción:</h3>
                    <Field className={!(errors.descripcion && touched.descripcion) ? "textarea p-3" : "border border-danger border-3 rounded-4 p-3"}
                      component="textarea"
                      id="descripcion"
                      name="descripcion"
                      rows="4"
                      placeholder="Casco Antichoque">
                    </Field>
                    <ErrorMessage name="descripcion" component={() => (<section className="error text-danger">{errors.descripcion}</section>)} />
                  </section>

                  <Button clase={'form-button d-flex justify-content-center col-12'}
                    classButton={'guardar form-button col-3'}
                    textButton={'Guardar'} type={'submit'} />
                </Form>
              </section>
            )}
          </Formik>
        </section>
        <TableProductos
          textoColumna1={"Id Producto"}
          textoColumna2={"Nombre"}
          textoColumna3={"Precio"}
          textoColumna4={"Descripción"}
          textoColumna5={"Iventario"}
          textoColumna6={"Accion"}
        />
      </section>
    </>
  );
};
