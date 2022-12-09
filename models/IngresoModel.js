import dataBase  from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Ingreso = dataBase.define('ingresos', {
    
    idIngreso:{
        type:DataTypes.STRING,
        primaryKey: true,

    },

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

export default Ingreso