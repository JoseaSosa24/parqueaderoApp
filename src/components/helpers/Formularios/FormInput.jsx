import React from "react";

export const FormInput = ({ infomacionInput, classInput, tipoInput,inputName, inputId, inputPlaceholder}) => {
  return (
    <section className="inputs">
      <h3 className="text-white fs-5">{infomacionInput}</h3>
      <input className={classInput} type={tipoInput} name={inputName} id={inputId} placeholder={inputPlaceholder}/>
    </section>
  );
};
