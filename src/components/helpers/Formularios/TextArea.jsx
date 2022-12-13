import React from "react";

export const TextArea = ({ nameTextArea, idTextArea,classSection,onChange, textareaPlaceholder }) => {
  return (
    <section className={"inputs "+classSection}>
      <h3 className="text-white fs-5">Descripción:</h3>
      <textarea className="fs-5 p-2" id={idTextArea} name={nameTextArea} rows="3" placeholder={textareaPlaceholder}></textarea>
    </section>
  );
};
