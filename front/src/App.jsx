import { Children, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Aside } from "./components/helpers/Barra Lateral/Aside";
import { Main } from "./components/layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaginaError404 } from "./components/helpers/Error/PaginaError404";
import { Inicio } from "./components/helpers/Inicio/Inicio";


function App() {
  
  const [count, setCount] = useState(0);
  /* const router = createBrowserRouter([
    {
      path: "/",
      element: <Aside />,
      errorElement: <PaginaError404 />,
    },
    {
      path: "/inicio",
      element: <Inicio />
    }
  ]); */

  return (
    <section className="App d-flex">
      <Aside />
      <Main />
    </section>
  );
}

export default App;
