import React, { useEffect, useState } from "react";
import { BarraInferiorIconos } from "./BarraInferiorIconos";
import moment from "moment/moment";

export const Inicio = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="header d-flex flex-column">
      <section className="encabezado d-flex flex-column justify-content-center align-items-center ">
        <img  className="logo-inicio" src="../../../../src/assets/icons/icon-inicio.png" alt=" logo" width={'90px'} />
        <section className="titulo-inicio"><h1>BIENVENIDO JOSÉ GREGORIO</h1></section>
        
      </section>
      <section className="time">
      <h1> {currentTime}</h1>
        
      </section>
      <BarraInferiorIconos/>


    </section>
  );
};