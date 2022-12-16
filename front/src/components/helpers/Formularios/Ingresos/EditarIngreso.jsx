import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URIIngresos = 'http://localhost:3100/ingresos/'

import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { Mensaje } from "../Mensaje";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Editaringreso = () => {
    /* let documento, nombre, correo, direccion, celular; */
    const [idCliente, setIdCliente] = useState('');
    const [placaMoto, setPlacaMoto] = useState('');
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [horaIngreso, setHoraIngreso] = useState('');
    const [horasTotales, setHorasTotales] = useState('');
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
    const updateIngreso = async (e) => {
        /* e.preventDefault() */
       
        await axios.put(URIIngresos + id, {
            "idCliente": idCliente,
            "placaMoto": placaMoto,
            "fechaIngreso": fechaIngreso,
            "horaIngreso": horaIngreso,
            "horasTotales": horasTotales
            
        })
         correcto();
         navigate('/ingresos') 
    }

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        if (name == "idCliente") {
            setIdCliente(value)
        }
        if (name == "placaMoto") {
            setPlacaMoto(value)
        }
        if (name == "fechaIngreso") {
            setFechaIngreso(value)
        }
        if (name == "horaIngreso") {
            setHoraIngreso(value)
        }
        if (name == "horasTotales") {
            setHorasTotales(value)
        }

        /*   setValoresForm({...valoresForm, [name]: value}) */
    }


    useEffect(() => {
        getIngresoById()
    }, []);

    const getIngresoById = async () => {
        let res = await axios.get(URIIngresos + id)
        console.table(res.data);
        setIdCliente(res.data.idCliente)
        console.log(idCliente)
        setPlacaMoto(res.data.placaMoto)
        console.log(placaMoto)
        setFechaIngreso(res.data.fechaIngreso)
        console.log(fechaIngreso)
        setHoraIngreso(res.data.horaIngreso)
        console.log(horaIngreso)
        setHorasTotales(res.data.horasTotales)
        console.log(horasTotales)

    }
    /* set */

    const correcto = (e) => {
        swal({
            title: "Mensaje de éxito",
            text: "¡Ingreso de moto agregado correctamente!",
            icon: "success",
            buttons: "ok"
        })
    }

    return (
        <>
            <section className="registro-cliente m-4">
                <Titulo textTitulo={"Editar Ingreso:"} />
                <section className="formulario d-flex align-items-center justify-content-center p-4">

                    <Formik enableReinitialize={true}
                        initialValues={{
                            idCliente: '',
                            placaMoto: '',
                            fechaIngreso: '',
                            horaIngreso: '',
                            horasTotales: ''
                        }}

                        onSubmit={(valores, { }) => {

                            updateIngreso()
                            
                            /* cambiarFormularioEnviado(true); */

                        }}
                    >
                        {({ errors, touched }) => (
                            <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                                <Form className="formulario-clientes row col-12 d-flex g-3 ">
                                    <FormInput
                                        classSection={"col-3"}
                                        title={"Cliente:"}
                                        tipoInput={"number"}
                                        inputId={"idCliente"}
                                        inputName="idCliente"
                                        inputPlaceholder={idCliente}
                                        maxLength={"10"}
                                        value={idCliente}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Placa: "}
                                        tipoInput={"text"}
                                        inputId={"placaMoto"}
                                        inputName="placaMoto"
                                        maxLength={"6"}
                                        value={placaMoto}
                                        onChange={(e) => handleOnChange(e)}

                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"fechaIngreso:"}
                                        tipoInput={"date"}
                                        inputId={"fechaIngreso"}
                                        inputName="fechaIngreso"
                                        value={fechaIngreso}
                                        onChange={(e) => handleOnChange(e)}


                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"horaingreso :"}
                                        tipoInput={"time"}
                                        inputId={"horaIngreso"}
                                        inputName="horaIngreso"
                                        value={horaIngreso}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"horasTotales :"}
                                        tipoInput={"number"}
                                        inputId={"horasTotales"}
                                        inputName={"horasTotales"}
                                        maxlength="10"
                                        value={horasTotales}
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
                    <Link className="btn botones " to={"/ingresos"}> <button className="botones">
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
