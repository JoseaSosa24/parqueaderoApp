import React from 'react'
import { Logo } from './Logo'
import { MenuItem } from './MenuItem'
/* import img from '../../../../src/assets/icons/icon-cliente.png' */

export const Aside = () => {
    return (
        <aside className='barra-lateral' id=''>
            <Logo />
            <MenuItem src={'../../../../src/assets/icons/icon-cliente.png'} itemText={'Registro Cliente'} />
            <MenuItem src={'../../../../src/assets/icons/icon-producto.png'} itemText={'Registro Producto'} />
            <MenuItem src={'../../../../src/assets/icons/icon-ingreso.png'} itemText={'Registro Ingreso '} />
            <MenuItem src={'../../../../src/assets/icons/icon-venta.png'} itemText={'Venta Productos'} />
        </aside>
    )
}
