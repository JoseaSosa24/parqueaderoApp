import React from "react";
import { Link, Outlet,BrowserRouter as Router } from 'react-router-dom'


export const MenuItem = ({ src, itemText, classImg, to, href }) => {
  return (

    <section className="menu-item d-flex align-items-center justify-content-center">
      <Link to={to} className='menu-item-link text-decoration-none d-flex align-items-center justify-content-center' hrefLang={href}>
        <img src={src} className={classImg} id="" width="38" height="" />
        {itemText}
      </Link>
      <Outlet />
    </section>

  );
};
