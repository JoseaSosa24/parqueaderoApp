import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Cliente = dataBase.define("clientes", {

    idCliente:{
        type: DataTypes.INTEGER,
        primaryKey: true
        
    },
    cedCliente:{
        type: DataTypes.STRING,
        unique:true
    },
    nombre:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    direccion:{
        type: DataTypes.STRING
    },
    celular:{
        type: DataTypes.STRING
    },

});

export {
Cliente
}