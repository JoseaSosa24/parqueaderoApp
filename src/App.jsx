import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Aside } from "./components/helpers/Barra Lateral/Aside";
import { Main } from "./components/layout/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="App d-flex">
      <Aside />
      <Main />
    </section>
  );
}

export default App;
