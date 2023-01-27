const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const interfacesTablaSchema = new Schema({
    creditos : {
        type : int,
        require: true
    }
});

module.exports = interfacesTabla = mongoose.model('interfaces',interfacesTablaSchema);