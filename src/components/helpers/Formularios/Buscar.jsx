import React from "react";

export const Buscar = ({ search, button }) => {
  return (
    <section className={button}>
      <form className="search"  >
        <button className="icon-buscar" type="submit">
          <img
            src="../../../../src/assets/icons/icon-buscar.png"
            width={25}
            alt="img"
          />
        </button>
        <input type="serch" id="search" placeholder={search} />
      </form>
    </section>
  );
};
