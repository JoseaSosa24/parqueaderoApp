import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:3100/clientes/'

import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { Mensaje } from "../Mensaje";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const EditarCliente = () => {
    let documento, nombre,correo,direccion,celular;
    /* const [documento, setDocumento] = useState({ campo: '', valido: null });
    const [nombre, setNombre] = useState({ campo: '', valido: null });
    const [correo, setCorreo] = useState({ campo: '', valido: null });
    const [direccion, setDireccion] = useState({ campo: '', valido: null });
    const [celular, setCelular] = useState({ campo: '', valido: null }); */
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
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            "cedCliente": `${documento.campo}`,
            "nombre": `${nombre.campo}`,
            "correo": `${correo.campo}`,
            "direccion": `${direccion.campo}`,
            "celular": `${celular.campo}`
        })
        /* navigate('/clientes') */
    }

/*     useEffect(() => {
        getClienteById()
    }, []) */

 /*    const getClienteById = async () => {
        const res = await axios.get(URI + id)
        valore res.data.cedCliente ,
        nombre :res.data.nombre ,
        correo: res.data.correo ,
        direccion: res.data.direccion ,
        celular: res.data.celular 
        console.log(res);
    } */

    return (
        <>
            <section className="registro-cliente m-4">
                <Titulo textTitulo={"Editar:"} />
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
                            console.table(valores)
                            documento = valores.documento
                            console.log(documento)
                            nombre = valores.nombre
                            console.log(nombre)
                            correo = valores.correo
                            console.log(correo)
                            direccion = valores.direccion
                            console.log(direccion)
                            celular = valores.celular
                            console.log(celular)
                            createCliente()
                            correcto();

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
            </section>
        </>

    )
}
