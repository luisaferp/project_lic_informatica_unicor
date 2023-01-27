const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const OrdenarLasPiezasSchema = new Schema({
    enunciado : {
        type : String,
        require: true
    },
    formato : {
        type : String,
        require: true
    }
});

module.exports = OrdenarLasPiezas = mongoose.model('ordenar_piezas',OrdenarLasPiezasSchema);