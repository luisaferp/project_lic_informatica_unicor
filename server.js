const express = require("express");
const app = express();
const mongoose = require("mongoose");

//tablas
const manejoFunciones = require("./routes/manejo_funciones");
const interfacesTabla = require("./routes/interfacesTabla");
const contenido = require("./routes/contenido");
const videos = require("./routes/videos");
const actividades = require("./routes/actividades");
const sopaDeLetras = require("./routes/sopa_de_letras");
const respuestaDeSopa = require("./routes/respuesta_de_sopa");
const td = require("./routes/tarjetas_didacticas");
const codigosTD = require("./routes/codigos_td");
const arrastrarYSoltar = require("./routes/arrastrar_y_soltar");
const codigosAS = require("./routes/codigos_as");


//fin tablas

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb+srv://myServerAdmin:mipassword@cluster0.6wkud22.mongodb.net/project?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});



app.listen(3000, ()=>{
    console.log('Project Unicor LuisaServer: On')
    
})

app.use('/api/manejo_funciones',manejoFunciones);
app.use('/api/interfacesTabla',interfacesTabla);
app.use('/api/contenido',contenido);
app.use('/api/videos',videos);
app.use('/api/actividades',actividades);
app.use('/api/sopa_de_letras',sopaDeLetras);
app.use('/api/respuestas_de_sopa',respuestaDeSopa);
app.use('/api/tarjetas_didacticas',td);
app.use('/api/codigos_td',codigosTD);
app.use('/api/arrastrar_y_soltar',arrastrarYSoltar);
app.use('/api/codigos_as',codigosAS);


module.exports = app;

