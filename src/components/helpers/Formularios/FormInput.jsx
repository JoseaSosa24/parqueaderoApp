import React from 'react'
import { Section } from './Section'

export const FormInput = ({tituloRegistro}) => {
    return (
        <section>
            <h1>{tituloRegistro}</h1>
            <section>
            <input type="text" />
            <input type="button" />
            </section>
            
        </section>
    )
}
