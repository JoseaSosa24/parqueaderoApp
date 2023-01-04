import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import React from 'react'
import { Titulo } from "../Titulo";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { Mensaje } from "../Mensaje";
import { Formik, Form} from "formik";

export const Editaringreso = () => {
    const uriIngresos = 'http://localhost:3100/ingresos/'
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
        celular: /^\d{10}$/,
        placaMoto: /^[a-zA-Z0-9]{6}$/
    };

    //procedimiento para actualizar
    const updateIngreso = async (valores) => {
        /* e.preventDefault() */
        console.table(valores)
        try {
            await axios.put(uriIngresos + id, valores)
            correcto();
            navigate('/ingresos')
        } catch (error) {
            incorrecto("Error al tratar de actulizar este registro")
        }

    }

    useEffect(() => {
        getIngresoById()
    }, [uriIngresos]);

    const getIngresoById = async () => {
        try {
            const res = await axios.get(uriIngresos + id)
            console.table(res.data);
            setInitialValues({
                idCliente: res.data.idCliente,
                placaMoto: res.data.placaMoto,
                fechaIngreso: res.data.fechaIngreso,
                horaIngreso: res.data.horaIngreso,
                horasTotales: res.data.horasTotales
            });

        } catch (error) {
            console.error("Error al cargar los datos: " + error);
        }
    }


    const correcto = (e) => {
        swal({
            title: "Mensaje de éxito",
            text: "¡Ingreso de moto agregado correctamente!",
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
                <Titulo textTitulo={"Editar Ingreso:"} />
                <section className="formulario d-flex align-items-center justify-content-center p-4">

                    <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        validate={(valores) => {
                            let errores = {};

                            if (!valores.idCliente) {
                                errores.idCliente = 'Por favor ingresa un documento'
                            }
                            else if (!expresionRegular.documento.test(valores.idCliente)) {
                                errores.idCliente = 'El documento debe tener mínimo 9 máximo 10 digitos númericos'
                            }
                            if (valores.fechaIngreso==="0000-00-00") {
                                errores.fechaIngreso = 'Por favor ingresa una fecha valida'
                            }
                            if (!valores.horaIngreso) {
                                errores.horaIngreso = 'Por favor ingresa una hora valida'
                            }
                            
                            if (!valores.placaMoto) {
                                errores.placaMoto = 'Por favor ingresa un documento'
                            } else if (!expresionRegular.placaMoto.test(valores.placaMoto)) {
                                errores.placaMoto = 'La placa debe contener 6 caracteres'
                            }
                            
                            if (!valores.horasTotales) {
                                errores.horasTotales = "Por favor ingresa las horas";
                            } else if (valores.horasTotales < 0) {
                                errores.horasTotales = "Las horas deben ser mayor a cero";
                            }

                            return errores;
                        }}
                        onSubmit={(valores) => {
                            updateIngreso(valores)
                        }}
                    >
                        {({ errors, touched }) => (
                            <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                                <Form className="formulario-ingresos row col-12 d-flex g-3 ">
                                    <FormInput
                                        classSection={"col-3"}
                                        title={"Cliente:"}
                                        error={errors.idCliente}
                                        touched={touched.idCliente}
                                        tipoInput={"number"}
                                        inputId={"idCliente"}
                                        inputName={"idCliente"}
                                        maxlength={"10"}
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Placa: "}
                                        error={errors.placaMoto}
                                        touched={touched.placaMoto}
                                        tipoInput={"text"}
                                        inputId={"placaMoto"}
                                        inputName="placaMoto"
                                        maxlength="6"
                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"fechaIngreso:"}
                                        error={errors.fechaIngreso}
                                        touched={touched.fechaIngreso}
                                        tipoInput={"date"}
                                        inputId={"fechaIngreso"}
                                        inputName="fechaIngreso"
                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"horaingreso :"}
                                        error={errors.horaIngreso}
                                        touched={touched.horaIngreso}
                                        tipoInput={"time"}
                                        inputId={"horaIngreso"}
                                        inputName="horaIngreso"
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"horasTotales :"}
                                        error={errors.horasTotales}
                                        touched={touched.horasTotales}
                                        tipoInput={"number"}
                                        inputId={"horasTotales"}
                                        inputName={"horasTotales"}
                                        maxlength="10"
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
