const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ActivididadesSchema = new Schema({
    tipos_de_actividades : {
        type : String,
        require: true
    }
});

module.exports = activididades = mongoose.model('actividades',ActivididadesSchema);