const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const EvaluacionSchema = new Schema({
    calificacion : {
        type : Number,
        require: true
    }
});

module.exports = Evaluacion = mongoose.model('evaluaciones',EvaluacionSchema);