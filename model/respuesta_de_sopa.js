const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const RespuestaDeSopaSchema = new Schema({
    calificacion : {
        type : Number,
        require: true
    },
    valoracion : {
        type : Number,
        require: true
    }
});

module.exports = RespuestaDeSopa = mongoose.model('respuestas_sopa',RespuestaDeSopaSchema);