const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CodigosOPSchema = new Schema({
    lenguaje_de_programacion : {
        type : String,
        require: true
    }
});

module.exports = CodigosOP = mongoose.model('codigos_op',CodigosOPSchema);