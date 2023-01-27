const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const SopaDeLetrasSchema = new Schema({
    enunciado : {
        type : String,
        require: true
    },
    formato : {
        type : String,
        require: true
    }
});

module.exports = SopaDeLetras = mongoose.model('sopa_De_letras',SopaDeLetrasSchema);