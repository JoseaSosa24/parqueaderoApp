import React from "react";

export const Titulo = ({ textTitulo, tittle }) => {
  return (
    <section className={tittle}>
      <h2 className="fw-bold">{textTitulo}</h2>
    </section>
  );
};
