import { Cliente } from "../model/ClienteModel.js";

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
            message: "El cliente no se puede mostrar el cliente " + error
        });   
    }
}

const editarCliente = async(req, res)=>{

    try {
        const {cedCliente, nombre, correo, direccion, celular} = req.body
        let cliente = await Cliente.findOne({
            where:{idCliente: req.params.id}
        });
    
        if(cliente){
            cliente = await Cliente.updateOne({idCliente:req.params.id}, {$set:{cedCliente, nombre, correo, direccion, celular}});
            res.json(cliente);
            
        }else{
            return res.status(404).json({msg: 'No existe el cliente a borrar'});
        }
        
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }

   

}

const borrarCliente = async(req, res)=>{
    try {
        let cliente = await Cliente.findOne({
            where:{idCliente: req.params.id}
        })

        if(cliente){
            await Cliente.findAndDelete({idCliente:req.params.id})

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

export {crearCliente, mostrarCliente, mostrarClientes, editarCliente, borrarCliente}