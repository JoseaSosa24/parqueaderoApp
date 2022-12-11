import React from "react";

export const FormInput = ({ estado, cambiarEstado, infomacionInput, classInput, tipoInput, inputName,
  inputId, inputPlaceholder, classSection, expresionRegular, /* onChange */ required, title,
  maxlength, onkeypress, pattern }) => {

  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  }


  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: 'true' });
        infomacionInput=infomacionInput+" correcto "+estado.campo
        console.log("CAMPO CORRECTO "+infomacionInput)
       
      } else {
        cambiarEstado({ ...estado, valido: 'false' });
        infomacionInput=infomacionInput+" incorrecto "+estado.campo
        console.log("CAMPO INCORRECTO "+infomacionInput)
      }
    }

    /* if(funcion){
      funcion();
    } */
  }


  return (
    <section className={" " + classSection}>
      <h3 className="text-white fs-5">{infomacionInput}</h3>
      <input className={"form-control " + classInput}
        id={inputId}
        type={tipoInput}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={onChange}
        /*value={estado.campo}*/
        onKeyUp={validacion}
        onBlur={validacion}
        title={title}
        maxLength={maxlength}
        onKeyDown={onkeypress}
        pattern={pattern}
        
        required={required}
      />
    </section>
  );
};
