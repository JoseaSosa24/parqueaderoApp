import React from "react";

export const FormInput = ({infomacionInput, classInput, tipoInput, inputName,
  inputId, inputPlaceholder, classSection, expresionRegular, title,
  maxlength }) => {

    
 
  return (
    <section className={" " + classSection}>
      <h3 className="text-white fs-5">{infomacionInput}</h3>
      {console.log(estado)}
      <input className={"form-control " + classInput}
        id={inputId}
        type={tipoInput}
        name={inputName}
        placeholder={inputPlaceholder}
        title={title}
        maxLength={maxlength}
      />
    </section>
  );
};
