const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const interfacesSchema = new Schema({
    lenguaje_programacion : {
        type : String,
        require: true
    }
});

module.exports = interfaces = mongoose.model('interfaces',interfacesSchema);