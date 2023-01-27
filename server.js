const express = require("express");
const app = express();
const mongoose = require("mongoose");
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
const ordenarLasPiezas = require("./routes/ordenar_las_piezas");
const codigosOP = require("./routes/codigos_op");
const evaluacion = require("./routes/evaluacion");
const preguntas = require("./routes/preguntas");
const respuestas = require("./routes/respuestas");
const preguntasYrespuestas = require("./routes/preguntas_y_respuestas");
const usuarios = require("./routes/usuarios");
const recursos = require("./routes/recursos");
const documentos = require("./routes/documentos");
const infografias = require("./routes/infografias");
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
app.use('/api/ordenar_las_piezas',ordenarLasPiezas);
app.use('/api/codigos_op',codigosOP);
app.use('/api/evaluacion',evaluacion);
app.use('/api/preguntas',preguntas);
app.use('/api/respuestas',respuestas);
app.use('/api/preguntas_y_respuestas',preguntasYrespuestas);
app.use('/api/usuarios',usuarios);
app.use('/api/recursos',recursos);
app.use('/api/documentos',documentos);
app.use('/api/infografias',infografias);


module.exports = app;

