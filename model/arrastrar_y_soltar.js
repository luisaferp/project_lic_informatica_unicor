const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ArrastrarYSoltarSchema = new Schema({
    aciertos : {
        type : String,
        require: true
    },
    errores : {
        type : String,
        require: true
    }
});

module.exports = ArrastrarYSoltar = mongoose.model('arrastrar_soltar',ArrastrarYSoltarSchema);