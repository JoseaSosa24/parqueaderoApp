import { Ingreso } from "../models/IngresoModel.js";

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
        const ingreso = await Ingreso.findOne({
            where: {idIngreso: req.params.id}
        });
        res.json(ingreso)
        
    } catch (error) {
        res.json({
            message: "No se pudo encontrar el ingreso " + error
        })
        
    }
}

const editarIngreso = async(req, res)=>{
    try {
        let ingreso = await Ingreso.findOne({
            where:{idIngreso: req.params.id}
        })

        if(ingreso){

            ingreso = await Ingreso.updateOne({idIngreso:req.params.id}, {$set:{idCliente,placaMoto,horaIngreso,fechaIngreso,horasTotales}});
            res.json(ingreso);
        }else{
            return res.status(404).json({msg: 'No existe el ingresos a editar'});
        }
        
    } catch (error) {
        res.json({
            message: "No se pudo encontrar el ingreso " + error
        })
        
    }
}

const borrarIngreso = async(req, res)=>{
    try {
        const ingreso = await Ingreso.findOne({
            where:{idIngreso: req.params.id}
        })
    
        if(ingreso){
            await Ingreso.findAndDelete({idIngreso:req.params.id})
        }else{
            return res.status(500).json({
                error: error
            });
        }
        
    } catch (error) {
        res.json({
            message: "El cliente no se puede borrar el cliente " + error
        });    
    }
 
}

export {crearIngreso, mostrarIngreso, mostrarIngresos, editarIngreso, borrarIngreso}