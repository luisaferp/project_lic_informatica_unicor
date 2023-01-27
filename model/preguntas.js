const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const PreguntasSchema = new Schema({
    enunciado : {
        type : String,
        require: true
    }
});

module.exports = Preguntas = mongoose.model('preguntas',PreguntasSchema);