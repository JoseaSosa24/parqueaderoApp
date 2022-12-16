import React from 'react'

export const Button = ({clase, classButton, textButton, type, id}) => {
    return (
        <section className={clase} id={id}>
            <button className={classButton} type={type}>{textButton}</button>
        </section>
    )
}
