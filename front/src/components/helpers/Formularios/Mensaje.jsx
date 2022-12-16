import React from 'react'

export const Mensaje = ({classMensaje,mensaje}) => {
    return (
        <section className="container mt-4 col-7 ">
            <section className={"mensaje d-flex justify-content-center p-2 fw-bold "+classMensaje} role="alert">
                {mensaje}
            </section>
        </section>
    )
}
