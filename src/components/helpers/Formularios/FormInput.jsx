import React from "react";

export const FormInput = ({ infomacionInput, classInput, tipoInput }) => {
  return (
    <section className="inputs">
      <h3 className="text-white fs-5">{infomacionInput}</h3>
      <input className={classInput} type={tipoInput} />
    </section>
  );
};
