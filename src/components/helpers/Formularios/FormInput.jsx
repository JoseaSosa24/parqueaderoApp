import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormInput = ({classSection, infomacionInput,inputId, errors,classInput, tipoInput, inputName,
 inputPlaceholder, expresionRegular, title,
  maxlength }) => {



  return (

    <section className={" "+classSection}>
      <h3 className={!errors ? "text-white fs-5" : "text-danger fs-5"}>{title}</h3>
      <Field
        className={!errors ? classInput+" form-control item-form " : "form-control item-form border border-danger border-3 rounded-4"}
        type={tipoInput}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        maxlength={maxlength}
      />
      <ErrorMessage name={inputName} component={() => (<p className="error text-danger">{errors}</p>)} />
    </section>

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
