const express = require("express");
const app = express();
const mongoose = require("mongoose");
const manejoFunciones = require("./routes/manejo_funciones");
const interfacesTabla = require("./routes/interfacesTabla");
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
    console.log('LuisaServer On Project Unicor')
    
})

app.use('/api/manejo_funciones',manejoFunciones);
app.use('/api/interfaces',interfacesTabla);


module.exports = app;

