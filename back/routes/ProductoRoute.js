import express from "express";
import {
    crearProducto,
    mostrarProductos,
    mostrarProducto,
    editarProducto,
    borrarProducto
} from '../controllers/ProductoController.js'

const productoRouter = express.Router();

productoRouter.post('/', crearProducto);
productoRouter.get('/', mostrarProductos);
productoRouter.get('/:id', mostrarProducto);
productoRouter.put('/:id', editarProducto);
productoRouter.delete('/:id', borrarProducto);

export default productoRouter;