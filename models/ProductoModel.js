import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Producto = dataBase.define("productos", {

    idPoducto: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombreProducto: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DOUBLE
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    inventario: {
        type: DataTypes.INTEGER
    },

})

export {
    Producto
}
