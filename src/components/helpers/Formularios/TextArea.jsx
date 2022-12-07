import React from "react";

export const TextArea = ({nameTextArea, idTextArea}) => {
  return (
    <section className="inputs">
      <h3 className="text-white fs-5">Descripcion:</h3>
    <textarea id={idTextArea} name={nameTextArea} rows="5" cols="33"></textarea>
    </section>
  );
};
