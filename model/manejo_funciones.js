const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ManejoFuncionesSchema = new Schema({
    lenguaje_programacion : {
        type : String,
        require: true
    }
});

module.exports = ManejoFunciones = mongoose.model('manejo_de_funciones',ManejoFuncionesSchema);