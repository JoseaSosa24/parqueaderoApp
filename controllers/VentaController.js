import { Venta } from "../models/VentaModel.js";

const crearVenta = async (req, res) => {
    try {
        await Venta.create(req.body);
        res.json({
            message: "Venta creada correctamente"
        })

    } catch (error) {
        res.json({
            message: "La Venta no se pudo crear " + error
        });
    }
}
const mostrarVentas = async (req, res) => {
    try {
        const ventas = await Venta.findAll();
        res.json(ventas)

    } catch (error) {
        res.json({
            message: "Las ventas no se pueden mostrar " + error
        });
    }
}

const mostrarVenta = async (req, res) => {
    try {
        const venta = await Venta.findOne({
            where: { idVenta: req.params.id }
        });
        res.json(venta)

    } catch (error) {
        res.json({
            message: "La venta no se pudo mostrar " + error
        });
    }
}

const editarVenta = async (req, res) => {
    try {
        await Venta.update(req.body, {
            where: { idVenta: req.params.id }
        });
        res.json({
            message: "La venta se ha actualizado correctamente "
        });

    } catch (error) {
        res.json({
            message: "La venta no se puede editar " + error
        });
    }

}

const borrarVenta = async (req, res) => {
    try {

        await Venta.destroy({
            where: { idVenta: req.params.id }
        });
        res.json({
            message: "La Venta se ha borrado correctamente "
        });

    } catch (error) {
        res.json({
            message: "La venta no se puede borrar " + error
        });

    }
}

export {
    crearVenta,
    mostrarVentas,
    mostrarVenta,
    editarVenta,
    borrarVenta
}