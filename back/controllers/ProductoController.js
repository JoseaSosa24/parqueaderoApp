import { Producto } from "../models/ProductoModel.js";

const crearProducto = async (req, res) => {
    try {
        await Producto.create(req.body);
        res.json({
            message: "Producto creado correctamente"
        })

    } catch (error) {
        res.json({
            message: "El producto no se pudo crear " + error
        });
    }
}
const mostrarProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos)

    } catch (error) {
        res.json({
            message: "Los Productos no se puedo mostrar " + error
        });
    }
}

const mostrarProducto = async (req, res) => {
    try {
        const producto = await Producto.findOne({
            where: { idProducto: req.params.id }
            
        });
        res.json(producto)

    } catch (error) {
        res.json({
            message: "Error al mostrar al producto " + error,
            estado: false
        });
    }
}

const editarProducto = async (req, res) => {
    try {
        const { Op }= Sequelize
        await Producto.update(req.body,{
            where: {idProducto: req.params.id }  
            
        });
        res.json({
            message: "El producto se ha actualizado correctamente ",
            estado: true
        });

    } catch (error) {
        res.json({
            message: "Error al editar producto" + error,
            estado: false
        });
    }

}

const borrarProducto = async (req, res) => {

    try {
        await Producto.destroy({
            where: { idProducto: req.params.id }
        });
        res.json({
            message: "¡Producto eliminado correctamente!",
            estado: true
        });

    } catch (error) {
        res.json({
            message: "Ha ocurrido un error y el producto no se ha eliminado",
            estado: false,
            messageError:error
        });

    }
}

export {
    crearProducto,
    mostrarProductos,
    mostrarProducto,
    editarProducto,
    borrarProducto
}