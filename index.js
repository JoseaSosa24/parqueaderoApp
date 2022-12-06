import express from "express";

const app = express();

app.listen('3001', () => {
    console.log("Servidor corriendo en el puerto 3001");
    console.log('http://localhost:3001');
});