const mongoose = require('mongoose'); /* constante de mongoose se importa libreria mongoose */
require('dotenv').config({path: 'variables.env'}) /* acceder a las variables de entorno */

const conectarDB = async () => {

    try {
        
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('BD Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }
}

module.exports = conectarDB 