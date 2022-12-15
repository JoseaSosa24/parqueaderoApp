import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:3100/clientes/'

import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { Mensaje } from "../Mensaje";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const EditarCliente = () => {
    /* let documento, nombre, correo, direccion, celular; */
    const [documento, setDocumento] = useState('');
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [celular, setCelular] = useState('');
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
    const updateCliente = async (e) => {
        /* e.preventDefault() */
        console.log(documento)
        console.log(nombre)
        console.log(correo)
        console.log(direccion)
        console.log(celular)
        await axios.put(URI + id, {
            "cedCliente": documento,
            "nombre": nombre,
            "correo": correo,
            "direccion": direccion,
            "celular": celular

        })
        correcto()
        navigate('/clientes')
    }

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        if (name == "documento") {
            setDocumento(value)
        }
        if (name == "nombre") {
            setNombre(value)
        }
        if (name == "correo") {
            setCorreo(value)
        }
        if (name == "direccion") {
            setDireccion(value)
        }
        if (name == "celular") {
            setCelular(value)
        }

        /*   setValoresForm({...valoresForm, [name]: value}) */
    }



    useEffect(() => {
        getClienteById()
    }, [])
    const getClienteById = async () => {
        let res = await axios.get(URI + id)
        console.table(res.data);
        setDocumento(res.data.cedCliente)
        console.log(documento)
        setNombre(res.data.nombre)
        console.log(nombre)
        setCorreo(res.data.correo)
        console.log(correo)
        setDireccion(res.data.direccion)
        console.log(direccion)
        setCelular(res.data.celular)
        console.log(celular)

    }
    /* set */

    const correcto = (e) => {
        swal({
            title: "Mensaje de éxito",
            text: "¡Cliente actualizado correctamente!",
            icon: "success",
            buttons: "ok"
        })

    }

    return (
        <>
            <section className="registro-cliente m-4">
                <Titulo textTitulo={"Editar Cliente:"} />
                <section className="formulario d-flex align-items-center justify-content-center p-4">

                    <Formik enableReinitialize={true}
                        initialValues={{
                            documento: '',
                            nombre: '',
                            correo: '',
                            direccion: '',
                            celular: ''
                        }}

                        onSubmit={(valores, { }) => {

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
                            updateCliente()


                            /* cambiarFormularioEnviado(true); */

                        }}
                    >
                        {({ errors, touched }) => (
                            <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                                <Form className="formulario-clientes row col-12 d-flex g-3 ">
                                    <FormInput
                                        classSection={"col-3"}
                                        title={"Documento:"}
                                        tipoInput={"text"}
                                        inputId={"documento"}
                                        inputName="documento"
                                        inputPlaceholder={documento}
                                        maxlength="10"
                                        value={documento}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Nombre:"}
                                        tipoInput={"text"}
                                        inputId={"nombre"}
                                        inputName="nombre"
                                        value={nombre}
                                        onChange={(e) => handleOnChange(e)}

                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"Correo:"}
                                        tipoInput={"email"}
                                        inputId={"correo"}
                                        inputName="correo"
                                        value={correo}
                                        onChange={(e) => handleOnChange(e)}


                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"Dirección :"}
                                        tipoInput={"text"}
                                        inputId={"direccion"}
                                        inputName="direccion"
                                        value={direccion}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Celular :"}
                                        tipoInput={"text"}
                                        inputId={"celular"}
                                        inputName={"celular"}
                                        maxlength="10"
                                        value={celular}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                    <Button clase={'form-button d-flex justify-content-center col-12'}
                                        classButton={'guardar form-button col-3'}
                                        textButton={'Actualizar'} type={'submit'} />
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
