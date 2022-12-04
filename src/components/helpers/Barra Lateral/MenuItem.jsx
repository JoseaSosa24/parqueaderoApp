import React from 'react'

export const MenuItem = ({src, itemText}) => {
    return (
        <section className='menu-item'>
            <img src={src} className='' id='' width='38' height=''/>
            <a className='' id=''>{itemText}</a>
        </section>
    )
}
