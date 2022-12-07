import express from "express";
import dataBase from "./database/dataBase.js";
import clienteRouter from "./routes/ClienteRoute.js";
import ingresoRouter from "./routes/IngresoRoute.js";
import cors from 'cors'

const app = express();
const port = 3100;

try {
    await dataBase.authenticate();
    console.log("Se conectó a la base de datos correctamente");
    
} catch (error) {
    console.log("Conexión no exitosa");
    
}

app.use(cors());
app.use(express.json());
app.use('/clientes', clienteRouter) // ruta clientes
app.use('/ingresos', ingresoRouter) // ruta ingresos




app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
    console.log(`http://localhost:${port}`);
});