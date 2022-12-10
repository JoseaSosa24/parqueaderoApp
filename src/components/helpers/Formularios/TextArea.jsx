import React from "react";

export const TextArea = ({ nameTextArea, idTextArea,classSection,onChange }) => {
  return (
    <section className={"inputs "+classSection}>
      <h3 className="text-white fs-5">Descripcion:</h3>
      <textarea id={idTextArea} name={nameTextArea} onChange ={onChange} rows="3" ></textarea>
    </section>
  );
};
