import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:3100/productos/'

import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { Mensaje } from "../Mensaje";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const EditarProducto = () => {
    /* let documento, nombre, correo, direccion, celular; */
    const [nombreProducto, setNombreProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [inventario, setInventario] = useState('');
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
    const updateProducto = async (e) => {
        /* e.preventDefault() */
        await axios.put(URI + id, {
            nombreProducto: nombreProducto,
            precio: precio,
            descripcion: descripcion,
            inventario: inventario,
        })
        correcto()
        navigate('/productos')


    }

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        if (name == "nombreProducto") {
            setNombreProducto(value)
        }
        if (name == "precio") {
            setPrecio(value)
        }
        if (name == "descripcion") {
            setDescripcion(value)
        }

        if (name == "inventario") {
            setInventario(value)
        }
        /*   setValoresForm({...valoresForm, [name]: value}) */
    }



    useEffect(() => {
        getProductoById()
    }, [])
    const getProductoById = async () => {
        let res = await axios.get(URI + id)
        console.table(res.data);
        setNombreProducto(res.data.nombreProducto)
        console.log(nombreProducto)
        setPrecio(res.data.precio)
        console.log(precio)
        setDescripcion(res.data.descripcion)
        console.log(descripcion)
        setInventario(res.data.inventario)
        console.log(inventario)
    }
    /* set */

    const correcto = (e) => {
        swal({
            title: "Mensaje de éxito",
            text: "¡Producto actualizado correctamente!",
            icon: "success",
            buttons: "ok"
        })
    }

    return (
        <>
            <section className="registro-cliente m-4">
                <Titulo textTitulo={"Editar Producto: "} />
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
                            updateProducto()
                            /* cambiarFormularioEnviado(true); */

                        }}
                    >
                        {({ errors, touched }) => (
                            <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                                <Form className="formulario-clientes row col-12 d-flex g-3 ">
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"Nombre Producto:"}
                                        /*error={errors.nombreProducto}
                                        touched={touched.nombreProducto}*/
                                        tipoInput={"text"}
                                        inputId={"nombreProducto"}
                                        inputName="nombreProducto"
                                        value={nombreProducto}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Precio:"}
                                        /*error={errors.precio}
                                        touched={touched.precio}*/
                                        tipoInput={"number"}
                                        inputId={"precio"}
                                        inputName="precio"
                                        value={precio}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                    <FormInput
                                        classSection={"col-3"}
                                        title={"Inventario:"}
                                        /*error={errors.inventario}
                                        touched={touched.inventario}*/
                                        tipoInput={"number"}
                                        inputId={"inventario"}
                                        inputName="inventario"
                                        inputPlaceholder={"50"}
                                        value={inventario}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                    <section className={"textarea col-12"}>
                                        <h3 className={!(errors.descripcion && touched.descripcion) ? "text-white fs-5" : "text-danger fs-5"}>Descripción:</h3>
                                        <Field className={!(errors.descripcion && touched.descripcion) ? "textarea" : "border border-danger border-3 rounded-4"}
                                            component="textarea"
                                            id="descripcion"
                                            name="descripcion"
                                            rows="4"
                                            value={descripcion}
                                            onChange={(e) => handleOnChange(e)}
                                        >
                                        </Field>
                                        {/* <ErrorMessage name="descripcion" component={() => (<section className="error text-danger">{errors.descripcion}</section>)} /> */}
                                    </section>

                                    <Button clase={'form-button d-flex justify-content-center col-12'}
                                        classButton={'guardar form-button col-3'}
                                        textButton={'Actualizar'} type={'submit'} />
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
