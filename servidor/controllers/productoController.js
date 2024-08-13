const Producto = require("../models/Producto");



exports.crearProducto = async (req, res) => { /* controlador */


    try {
        let producto;

        // Creamos nuestro producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error'); /* uso de respuesta como segundo paramentro */
    }
}


/* Se exporta la funcion obtenerProductos, se hace peticion a base de datos  */ /*  */
exports.obtenerProductos = async (req, res) => { /* resive un req y mandamos un res */

    try {
        
        const productos = await Producto.find(); /* constante "productos" = constante "Producto" exportada de la base de datos */
        res.json(productos)/* Se devuelve al cliente un json con la constante "6productos" */

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en la obtencion de productos');
    }

}

exports.actualizarProducto = async (req, res) => {

    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id); /* puede aver error aca */

        if(!producto) {
            res.status(404).json({ msg: 'no existe el producto'})
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, {new: true})
        res.json(producto); 

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id); /* puede aver error aca */

        if(!producto) {
            res.status(404).json({ msg: 'no existe el producto'})
        }

        res.json(producto); 

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'no existe el producto'})
        }

        
        await Producto.findByIdAndDelete({ _id: req.params.id })
        res.json('Producto eliminado con exito'); 

    } catch (error) {
        console.log('Error al eliminar el producto:', error);
        res.status(500).send('Hubo un error en la eliminacion');
    }
}