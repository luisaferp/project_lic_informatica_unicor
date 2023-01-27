const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const RespuestasPreguntasSchema = new Schema({
    enunciado : {
        type : String,
        require: true
    }
});

module.exports = RespuestasPreguntas = mongoose.model('respuestas_preguntas',RespuestasPreguntasSchema);