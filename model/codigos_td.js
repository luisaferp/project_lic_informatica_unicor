const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CodigosTDSchema = new Schema({
    lenguaje_de_programacion : {
        type : String,
        require: true
    }
});

module.exports = CodigosTD = mongoose.model('codigos_td',CodigosTDSchema);