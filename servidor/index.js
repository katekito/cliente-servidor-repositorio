const express = require('express');
const conectarDB = require('./config/db');


// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB(); 

/* Se abilita para que mande json a la aplicacion (aparecen el objeto puesto en postman) */
app.use(express.json());


app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => { /* puerto 4000 se accede a la URL como localhost:4000 */
    console.log('El servidor esta corriendo perfectamente')
})