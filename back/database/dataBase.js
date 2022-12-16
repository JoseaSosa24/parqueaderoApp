import { Sequelize } from "sequelize";


const dataBase = new Sequelize('parqueadero', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


export default dataBase;
