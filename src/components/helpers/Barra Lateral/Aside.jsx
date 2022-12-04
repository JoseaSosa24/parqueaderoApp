import React from 'react'
import { Logo } from './Logo'
import { MenuItem } from './MenuItem'
/* import img from '../../../../src/assets/icons/icon-cliente.png' */

export const Aside = () => {
    return (
        <aside className='barra-lateral d-flex flex-column align-items-center gap-1' id=''>
            <Logo />
            <MenuItem src={'../../../../src/assets/icons/icon-cliente.png'} itemText={'Registro Clientes'} />
            <MenuItem src={'../../../../src/assets/icons/icon-producto.png'} itemText={'Registro Producto'} />
            <MenuItem src={'../../../../src/assets/icons/icon-ingreso.png'} itemText={'Registro Ingresos'} />
            <MenuItem src={'../../../../src/assets/icons/icon-venta.png'} classImg={'icon-venta'} itemText={'Venta Productos'} />
        </aside>
    )
}
