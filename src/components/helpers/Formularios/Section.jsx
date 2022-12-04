import React from 'react'
import { Forms } from './Forms'
import { Titulo } from './Titulo'

export const Section = ({ textTitle }) => {
    return (
        <section className=''>
            <Titulo textTitulo={textTitle} />
            <Forms >

            </Forms>
        </section>
    )
}
