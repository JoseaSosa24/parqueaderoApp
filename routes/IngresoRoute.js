import express from "express";

import { crearIngreso,
mostrarIngresos,
mostrarIngreso,
editarIngreso,
borrarIngreso
} from "../controllers/IngresoController.js";


const ingresoRouter = express.Router();

ingresoRouter.post('/', crearIngreso);
ingresoRouter.get('/', mostrarIngresos);
ingresoRouter.get('/:id', mostrarIngreso);
ingresoRouter.put('/:id', editarIngreso);
ingresoRouter.delete('/:id', borrarIngreso);

export default ingresoRouter;