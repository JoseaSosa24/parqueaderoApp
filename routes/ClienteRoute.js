import express from "express";
import { crearCliente, 
    mostrarCliente, 
    mostrarClientes, 
    editarCliente, 
    borrarCliente 
} from "../controllers/ClienteController.js";


const clienteRouter = express.Router();

clienteRouter.post('/', crearCliente);
clienteRouter.get('/', mostrarClientes);
clienteRouter.get('/:id', mostrarClientes);
clienteRouter.put('/:id', editarCliente);
clienteRouter.delete('/:id', borrarCliente);

export default clienteRouter;