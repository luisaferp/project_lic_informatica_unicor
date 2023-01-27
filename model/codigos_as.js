const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CodigosASSchema = new Schema({
    lenguaje_de_programacion : {
        type : String,
        require: true
    }
});

module.exports = CodigosAS = mongoose.model('codigos_as',CodigosASSchema);