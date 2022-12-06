import React from "react";

export const MenuItem = ({ src, itemText, classImg }) => {
  return (
    <section className="menu-item d-flex align-items-center justify-content-center">
      <img src={src} className={classImg} id="" width="38" height="" />
      <a id="">{itemText}</a>
    </section>
  );
};
