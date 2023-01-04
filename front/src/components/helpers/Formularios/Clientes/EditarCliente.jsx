import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { Mensaje } from "../Mensaje";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const EditarCliente = () => {
    const uriClientes = 'http://localhost:3100/clientes/'
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

    //procedimiento para actualizar
    const updateCliente = async (valores) => {
        /* e.preventDefault() */
        try {
            /* console.table(valores) */
            await axios.put(uriClientes + id, valores)
            correcto()
            navigate('/clientes')
        } catch (error) {
            incorrecto("Error al tratar de actulizar este registro")
        }
       
    }

    useEffect(() => {
        
        getClienteById()
    }, [uriClientes])
    

    const getClienteById = async () => {
        try {
            const res = await axios.get(uriClientes + id)
            console.table(res.data)
            setInitialValues({
               cedCliente:res.data.cedCliente,
               nombre:res.data.nombre,
               correo:res.data.correo,
               direccion:res.data.direccion,
               celular:res.data.celular
            });
        } catch (error) {
            console.error("Eroro al cargar lso datos: "+error);
        }
    }

    const correcto = (e) => {
        swal({
            title: "Mensaje de éxito",
            text: "¡Cliente actualizado correctamente!",
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
                <Titulo textTitulo={"Editar Cliente:"} />
                <section className="formulario d-flex align-items-center justify-content-center p-4">

                    <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}

                        validate={(valores) => {
                            let errores = {};

                            if (!valores.cedCliente) {
                                errores.cedCliente = 'Por favor ingresa un documento'
                            } else if (!expresionRegular.documento.test(valores.cedCliente)) {
                                errores.cedCliente = 'El documento debe tener mínimo 9 máximo 10 digitos númericos'
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
                            updateCliente(valores)
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
                                        error={errors.cedCliente}
                                        touched={touched.cedCliente}
                                        tipoInput={"text"}
                                        inputId={"documento"}
                                        inputName="cedCliente"
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
                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"Correo:"}
                                        error={errors.correo}
                                        touched={touched.correo}
                                        tipoInput={"email"}
                                        inputId={"correo"}
                                        inputName="correo"

                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"Dirección :"}
                                        error={errors.direccion}
                                        touched={touched.direccion}
                                        tipoInput={"text"}
                                        inputId={"direccion"}
                                        inputName="direccion"

                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Celular :"}
                                        error={errors.celular}
                                        touched={touched.celular}
                                        tipoInput={"text"}
                                        inputId={"celular"}
                                        inputName="celular"

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
                <Link className="btn botones" to={"/clientes"}>
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
