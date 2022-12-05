import React from "react";

export const Buscar = ({buscadorInput, inputbuscar}) => {
  return (
    <input type={"serch"} className={inputbuscar} placeholder={buscadorInput} />
  );
};