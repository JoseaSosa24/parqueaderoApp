import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:3100/clientes/'

import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { Mensaje } from "../Mensaje";
;

export const EditarCliente = () => {
    const [documento, setDocumento] = useState({ campo: '', valido: null });
    const [nombre, setNombre] = useState({ campo: '', valido: null });
    const [correo, setCorreo] = useState({ campo: '', valido: null });
    const [direccion, setDireccion] = useState({ campo: '', valido: null });
    const [celular, setCelular] = useState({ campo: '', valido: null });
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

    useEffect(() => {
        getClienteById()
    }, [])

    const getClienteById = async () => {
        const res = await axios.get(URI + id)
        setDocumento(res.data.cedCliente )
        setNombre(res.data.nombre)
        setCorreo(res.data.correo)
        setDireccion(res.data.direccion)
        setCelular(res.data.celular)
        console.log(res);
    }

    return (
        <section className="registro-cliente m-4">
            <Titulo textTitulo={"Editar Cliente:"} />
            <section className="formulario d-flex align-items-center justify-content-center p-4">
                <form action="" className="formulario-clientes row col-12 d-flex g-3 " onSubmit={update}>

                    <FormInput classSection={'col-3'}
                        estado={documento}
                        cambiarEstado={setDocumento}
                        classInput={"item-form"}
                        tipoInput={"text"}
                        infomacionInput={"Documento: "}
                        inputId={'documento'} inputName={'documento'}
                        
                        /*onChange={(e) => { setDocumento(e.target.value) }}*/
                        /*onkeypress={"if (e.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"}*/
                        onkeypress={(e) => { if (e.keyCode < 48 || e.keyCode > 57) e.returnValue = false }}
                        maxlength="10"
                        pattern={"[0-9]{9,10}"}
                        title='Sólo números. Minímo 9, Máximo 10 digitos'
                        expresionRegular={expresionRegular.documento}

                    />

                    <FormInput classSection={'col-4'}
                        estado={nombre}
                        cambiarEstado={setNombre}
                        classInput={"item-form"}
                        tipoInput={"text"}
                        infomacionInput={"Nombre: "}
                        inputId={'nombre'}
                        inputName={'nombre'}
                       
                        /*onChange={(e) => { setNombre(e.target.value) }}*/
                        title='Minímo 3 letras,máximo 35'
                        pattern={"[A-Za-zÀ-ÿ ]{2,35}"}
                        maxlength={35}
                        expresionRegular={expresionRegular.nombre}
                    />

                    <FormInput classSection={'col-5'}
                        estado={correo}
                        cambiarEstado={setCorreo}
                        classInput={"item-form"}
                        tipoInput={"email"}
                        infomacionInput={"Correo: "}
                        inputId={'correo'}
                        inputName={'correo'}
                        
                        expresionRegular={expresionRegular.correo}
                    /*onChange={(e) => { setCorreo(e.target.value) }}*/
                    />

                    <FormInput classSection={'col-5'}
                        estado={direccion}
                        cambiarEstado={setDireccion}
                        classInput={"item-form"}
                        tipoInput={"text"}
                        infomacionInput={"Direccion: "}
                        inputId={'direccion'}
                        inputName={'direccion'}
                        title='La dirección minima de 5 letras'
                        pattern={"[A-Za-z0-9À-ÿ ,-_#]{7,50}"}
                        expresionRegular={/^[A-Za-z0-9À-ÿ ,-_]{7,50}$/}
                    /*onChange={(e) => { setDireccion(e.target.value) }}*/
                    />

                    <FormInput classSection={'col-3'}
                        estado={celular}
                        cambiarEstado={setCelular}
                        classInput={"item-form"}
                        tipoInput={"text"}
                        infomacionInput={"Celular: "}
                        inputId={'celular'}
                        inputName={'celular'}
                        /*onChange={(e) => { setCelular(e.target.value) }}*/
                        expresionRegular={expresionRegular.celular}
                        pattern={"[0-9]{10}"}
                        title='El celular debe ser de 10 digitos'
                        maxlength="10" />
                    {formularioValido === false &&
                        <Mensaje classMensaje={'alert alert-danger'}
                            mensaje={'Campos incorrectos o faltan por rellenar.'} />
                    }
                    <Button clase={'form-button d-flex justify-content-center col-12'}
                        classButton={'guardar form-button col-3'}
                        textButton={'Actualizar'} type={'submit'} />
                </form>
            </section>



        </section>
    )
}
