import React from "react";

export const FormInput = ({ estado, cambiarEstado, infomacionInput, classInput, tipoInput, inputName,
  inputId, inputPlaceholder, classSection, expresionRegular, /* onChange */ required, title,
  maxlength, onkeypress, pattern }) => {
    let colorEstado = ' ';
    
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  }

  function cambiarColor() {
    
    if (estado.valido === 'true') {
      colorEstado = ' bg-primary '
    } else {
      colorEstado = ' bg-primary '
    }
    return colorEstado
  }

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: 'true' });
        
        /* infomacionInput=infomacionInput+" correcto "+estado.campo */
        console.log("CAMPO CORRECTO " + estado.valido)

      } else {
        cambiarEstado({ ...estado, valido: 'false' });
        /* infomacionInput=infomacionInput+" incorrecto "+estado.campo */
        console.log("CAMPO INCORRECTO " + estado.valido)
      }

    }

    /* if(funcion){
      funcion();
    } */
  }


  return (
    <section className={" " + classSection}>
      <h3 className="text-white fs-5">{infomacionInput}</h3>
      {console.log(estado)}
      <input className={"form-control " + classInput+colorEstado}
        id={inputId}
        type={tipoInput}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={onChange}
        value={estado}
        /*onKeyUp={validacion}*/
        /*onBlur={validacion}*/
        title={title}
        maxLength={maxlength}
        /*onKeyDown={validacion}*/
        pattern={pattern}
        /*onKeyUp={onkeypress}*/
        required={required}
      />
    </section>
  );
};
