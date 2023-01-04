import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { Mensaje } from "../Mensaje";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const EditarProducto = () => {
    const uriProductos = 'http://localhost:3100/productos/'
    const [initialValues, setInitialValues] = useState("");
    const [formularioValido, setFormularioValido] = useState(null);
    const navigate = useNavigate()
    const { id } = useParams()

    const expresionRegular = {
        usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        documento: /^\d{9,10}$/,
        celular: /^\d{10}$/
    };


    const updateProducto = async (valores) => {
        /* e.preventDefault() */
        const res = await axios.put(uriProductos + id, valores)
        if (res.data.estado) {
            correcto()
        } else {
            incorrecto(res.data.message)
        }
        navigate('/productos')
    }


    useEffect(() => {
        getProductoById()
    }, [uriProductos])

    const getProductoById = async () => {
        try {
            const res = await axios.get(uriProductos + id)
            console.table(res.data)
            setInitialValues({
                nombreProducto: res.data.nombreProducto,
                precio: res.data.precio,
                descripcion: res.data.descripcion,
                inventario: res.data.inventario
            });
        } catch (error) {
            console.error("Error al cargar los datos: " + error);
        }
    }

    const correcto = (e) => {
        swal({
            title: "Mensaje de éxito",
            text: "¡Producto actualizado correctamente!",
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
    return (
        <>
            <section className="registro-cliente m-4">
                <Titulo textTitulo={"Editar Producto: "} />
                <section className="formulario d-flex align-items-center justify-content-center p-4">
                    <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
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
                            if (!valores.descripcion) {
                                errores.descripcion = "Por favor ingresa una descripcion";
                            } /*else if (!expresionRegular.direccion.test(valores.direccion)) {
              errores.direccion = 'El direccion debe contener @ ,.'
            }*/

                            return errores;
                        }}
                        onSubmit={(valores, { resetForm }) => {
                            updateProducto(valores);
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
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Precio:"}
                                        error={errors.precio}
                                        touched={touched.precio}
                                        tipoInput={"number"}
                                        inputId={"precio"}
                                        inputName="precio"
                                    />
                                    <FormInput
                                        classSection={"col-3"}
                                        title={"Inventario:"}
                                        error={errors.inventario}
                                        touched={touched.inventario}
                                        tipoInput={"number"}
                                        inputId={"inventario"}
                                        inputName="inventario"
                                    />
                                    <section className={"textarea col-12"}>
                                        <h3 className={!(errors.descripcion && touched.descripcion) ? "text-white fs-5" : "text-danger fs-5"}>Descripción:</h3>
                                        <Field className={!(errors.descripcion && touched.descripcion) ? "textarea p-3" : "border border-danger border-3 rounded-4 p-3"}
                                            component="textarea"
                                            id="descripcion"
                                            name="descripcion"
                                            rows="4"
                                        >
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
                <Link className="btn botones" to={"/productos"}>
                    <button className="botones">
                        <img
                            className="iconos-botones-regresar"
                            src={"../../../../../src/assets/icons/regreso.png"}
                            alt="logo"
                            width="40px "
                            height="40px"
                        />
                    </button>
                </Link>
            </section>
        </>

    )
}
