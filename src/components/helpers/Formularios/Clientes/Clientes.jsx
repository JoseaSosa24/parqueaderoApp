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
  /*   const [documento, setDocumento] = useState({ campo: '', valido: null });
    const [nombre, setNombre] = useState({ campo: '', valido: null });
    const [correo, setCorreo] = useState({ campo: '', valido: null });
    const [direccion, setDireccion] = useState({ campo: '', valido: null });
    const [celular, setCelular] = useState({ campo: '', valido: null });
    const [formularioValido, setFormularioValido] = useState(null);
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false); */
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

  /* const createCliente = async (e) => {
    //e.preventDefault()//Buscar la forma que guarde y muestre el registro sin recargar la pagina
    e.preventDefault()
    if (
      documento.valido === 'true' &&
      nombre.valido === 'true' &&
      correo.valido === 'true' &&
      direccion.valido === 'true' &&
      celular.valido === 'true'
    ) {
      setFormularioValido(true)
      await axios.post(URI, {
        "cedCliente": `${documento.campo}`,
        "nombre": `${nombre.campo}`,
        "correo": `${correo.campo}`,
        "direccion": `${direccion.campo}`,
        "celular": `${celular.campo}`
      });
      correcto();
      console.log("Cliente agregado correctamente")
      setDocumento({ campo: '', valido: null });
      setNombre({ campo: '', valido: null });
      setCorreo({ campo: '', valido: null });
      setDireccion({ campo: '', valido: null });
      setCelular({ campo: '', valido: null });
    } else {
      setFormularioValido(false)

    }
  } */

  /*
    const buscarPorId = async (e)=>{
      //e.preventDefault();
      let dato = e.target.value;
      console.log(dato);
      const res = await axios.get(`${URI}/${dato}`)
      setDocumento({campo: res.cedCliente, valido: null});
      setCorreo({campo:res.correo, valido: null});
      setDireccion({campo: res.direccion, valido: null})
      setCelular({campo: res.celular, valido: null})
      setNombre({campo: res.nombre, valido: null})
  
    }
  
    useEffect(()=>{
      buscarPorId();
    }, [])
  */

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


        {/* <Table
        textoColumna1={"Documento"}
        textoColumna2={"Nombre"}
        textoColumna3={"Correo"}
        textoColumna4={"Direccion"}
        textoColumna5={"Celular"}
        textoColumna6={"Accion"}
      /> */}
      </section>
    </>

  );

}