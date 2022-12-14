import React from "react";
import { BarraInferiorIconos } from "./BarraInferiorIconos";

export const Inicio = () => {
  return (
    <section className="header d-flex flex-column">
      <section className="encabezado d-flex flex-column justify-content-center align-items-center ">
        <img  className="logo-inicio" src="../../../../src/assets/icons/icon-inicio.png" alt=" logo" width={'90px'} />
        <section className="titulo-inicio"><h1>BIENVENIDO JOSÉ GREGORIO</h1></section>
        
      </section>
      <section className="time">
      </section>
      <BarraInferiorIconos/>


    </section>
  );
};