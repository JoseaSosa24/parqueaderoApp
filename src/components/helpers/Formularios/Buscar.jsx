import React from "react";

export const Buscar = ({ search, button, onSubmit, onChange }) => {
  return (
    <section className={button}>
      <form className="search" onSubmit={onSubmit} >
        <button className="icon-buscar" type="submit"  >
          <img
            src="../../../../src/assets/icons/icon-buscar.png"
            width={25}
            alt="img"
          />
        </button>
        <input type="search" id="search" placeholder={search} onChange={onChange}/>
      </form>
    </section>
  );
};
