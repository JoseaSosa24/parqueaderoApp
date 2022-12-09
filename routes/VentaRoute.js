import express from "express";
import {
    crearVenta,
    mostrarVentas,
    mostrarVenta,
    editarVenta,
    borrarVenta
} from "../controllers/VentaController.js";


const ventaRouter = express.Router();

ventaRouter.post('/', crearVenta);
ventaRouter.get('/', mostrarVentas);
ventaRouter.get('/:id', mostrarVenta);
ventaRouter.put('/:id', editarVenta);
ventaRouter.delete('/:id', borrarVenta);

export default ventaRouter;