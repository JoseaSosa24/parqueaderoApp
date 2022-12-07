import { dataBase } from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Ingreso = dataBase.define('ingresos', {
    
    idIngreso

    idCliente:{
        type: DataTypes.INTEGER
    },
    placaMoto:{
        type: DataTypes.STRING
    },
    horaIngreso:{
        type: DataTypes.TIME
    },
    fechaIngreso:{
        type: DataTypes.DATE
    },
    horasTotales:{
        type: DataTypes.INTEGER
    }

});

export {
    Ingreso
}