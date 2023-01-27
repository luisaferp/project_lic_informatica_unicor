const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const RecursosSchema = new Schema({
    tipos_de_recursos : {
        type : String,
        require: true
    }
});

module.exports = Recursos = mongoose.model('recursos',RecursosSchema);