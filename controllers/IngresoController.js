import { Sequelize } from 'sequelize';
import Ingreso  from '../models/IngresoModel.js';

const crearIngreso = async(req, res)=>{

    try {
        await Ingreso.create(req.body);
        res.json({
            message: "Ingreso creado correctamente"
        })
        
    } catch (error) {
        res.json({
            message: "No se pudo registrar el ingreso de la moto "+ error
        })
        
    }
    
}


const mostrarIngresos = async(req, res)=>{
    try {
       const ingresos = await Ingreso.findAll();
       res.json(ingresos);
    } catch (error) {

        res.json({
            message: "No se pudo obtener los ingresos al parqueadero " + error
        })
        
    }
}

const mostrarIngreso = async(req, res)=>{
    try {
        const { Op }= Sequelize
        const ingreso = await Ingreso.findOne({
            where: {
                [Op.or]: [
                {idIngreso: req.params.id},
                {placaMoto: req.params.id},
                {idCliente: req.params.id},
                ]
            }
        });
        res.json(ingreso)
        
    } catch (error) {
        res.json({
            message: "No se pudo encontrar el ingreso " + error,
            estado: false
        
        })
        
    }
}

const editarIngreso = async(req, res)=>{
    try {
        await Ingreso.update(req.body, {
            where:{idIngreso: req.params.id}
        });
        res.json({
            message: "El ingreso se ha actualizado correctamente "
        });
        
        
    } catch (error) {
        res.json({
            message: "El ingreso no se puede editar " + error
        });  
        
        
    }
}

const borrarIngreso = async(req, res)=>{
    try {
        const { Op }= Sequelize
        await Ingreso.destroy({
         where: {
                [Op.or]: [
                {idIngreso: req.params.id},
                {placaMoto: req.params.id},
                ]
            }
            
        });
        res.json({
            message: "El ingreso borrado correctamente "
        });
      
        
    } catch (error) {
        res.json({
            message: "El ingreso no se puede borrar " + error
        });    
    }
 
}

export {crearIngreso, mostrarIngreso, mostrarIngresos, editarIngreso, borrarIngreso}