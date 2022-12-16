import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormInput = ({ value, onChange, classSection, infomacionInput, inputId, error, touched, classInput, tipoInput, inputName,
  inputPlaceholder, expresionRegular, title,
  maxlength }) => {



  return (
    <>

      <section className={" " + classSection}>
        <h3 className={!(error && touched) ? "text-white fs-5" : "text-danger fs-5"}>{title}</h3>
        <Field
          className={!(error && touched) ? classInput + " form-control item-form " : "form-control item-form border border-danger border-3 rounded-4"}
          type={tipoInput}
          id={inputId}
          name={inputName}
          placeholder={inputPlaceholder}
          maxLength={maxlength}
          value={value}
          onChange={onChange}
          

        />
        <ErrorMessage name={inputName} component={() => (<p className="textoError text-danger">{error}</p>)} />
      </section>
    </>

    /*  <section className={" " + classSection}>
       <h3 className="text-white fs-5">{infomacionInput}</h3>
       {console.log(estado)}
       <input className={"form-control " + classInput}
         id={inputId}
         type={tipoInput}
         name={inputName}
         placeholder={inputPlaceholder}
         maxLength={maxlength}
       />
     </section> */
  );
};
