import React from "react";

export const FormInput = ({ infomacionInput, classInput }) => {
  return (
    <section className="">
      <h3 className="text-white fs-5">{infomacionInput}</h3>
      <input className={classInput} type="text" />
    </section>
  );
};
