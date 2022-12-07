import { useRouteError } from "react-router-dom";

export function PaginaError404() {
  const error = useRouteError();
  console.error("error 404"+error);

  return (
    <section id="error-page bg-info">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
}