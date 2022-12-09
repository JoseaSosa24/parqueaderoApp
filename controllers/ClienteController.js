import { Cliente } from "../models/ClienteModel.js";

const crearCliente = async(req, res)=>{
    try {
        await Cliente.create(req.body);
        res.json({
            message: "Cliente creado correctamente"
        })
        
    } catch (error) {
        res.json({
            message: "El cliente no se pudo crear " + error
        });
    }

}

const mostrarClientes = async(req,res) =>{
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes)
        
    } catch (error) {
        res.json({
            message: "El cliente no se pudo crear " + error
        });
        
    }

}


const mostrarCliente = async(req,res)=>{
    try {
        const cliente = await Cliente.findOne({
            where:{idCliente: req.params.id}
        });
        res.json(cliente)
        
    } catch (error) {
        res.json({
            message: "El cliente no se puede mostrar " + error
        });   
    }
}

const editarCliente = async(req, res)=>{

    try {
        await Cliente.update(req.body, {
            where: {idCliente: req.params.id}
        });
        res.json({
            message: "El cliente se ha actualizado correctamente "
        });

    } catch (error) {
        res.json({
            message: "El cliente no se puede editar " + error
        });  
    }

   

}

const borrarCliente = async(req, res)=>{
    try {

        await Cliente.destroy({
            where:{idCliente: req.params.id}
        });
        res.json({
            message: "El cliente se borrado correctamente "
        });
             
    } catch (error) {
        res.json({
            message: "El cliente no se puede borrar " + error
        }); 
       
    }

}

export {crearCliente, mostrarCliente, mostrarClientes, editarCliente, borrarCliente}