import React from "react";

export const FormInput = ({ infomacionInput, classInput, tipoInput, inputName,
  inputId, inputPlaceholder, classSection, value, onChange, required, pattern, title, maxlength,onkeypress }) => {
  return (
    <section className={" " + classSection}>
      <h3 className="text-white fs-5">{infomacionInput}</h3>
      <input className={"form-control " + classInput} type={tipoInput} name={inputName}
        id={inputId} placeholder={inputPlaceholder} value={value}
        onChange={onChange} required={required} pattern={pattern} 
        title={title} maxLength={maxlength} />
    </section>
  );
};
