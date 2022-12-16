import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Venta = dataBase.define("ventas", {
    idVenta: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    idCliente: {
        type: DataTypes.INTEGER,
    },
    fechaVenta: {
        type: DataTypes.DATE
    },
    cantidad: {
        type: DataTypes.INTEGER
    },
    idProducto: {
        type: DataTypes.INTEGER
    },

});

export {
    Venta
}