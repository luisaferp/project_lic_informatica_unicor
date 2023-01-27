const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ContenidoTablaSchema = new Schema({
    conceptos : {
        type : String,
        require: true
    },
    caracteristicas : {
        type : String,
        require: true
    },
    sintaxis : {
        type : String,
        require: true
    }
});

module.exports = contenido = mongoose.model('contenido',ContenidoTablaSchema);