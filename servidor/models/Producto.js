/* se usara mongoose para crear el modelo y modelarlo y crear nuestra base de datos */
/* se instalo libreria mongoose, en "quick start guide" esta la documentacion*/ /* lso modelos tiene primera letra mayuscula */

const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: { /* igual que en el fronend el nombre en ves de producto */
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now() /* no se pasa valor por paramentro, se crea el atributo con fecha actual */
    }
});

module.exports = mongoose.model('Porducto', ProductoSchema);




