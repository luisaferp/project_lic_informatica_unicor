const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const RespuestasSchema = new Schema({
    id : {
        type : Number,
        require: true
    }
});

module.exports = Respuestas = mongoose.model('respuestas_de_preguntas',RespuestasSchema);