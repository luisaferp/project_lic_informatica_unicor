const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const InterfacesTablaSchema = new Schema({
    creditos : {
        type : Number,
        require: true
    }
});

module.exports = InterfacesTabla = mongoose.model('interfaces',InterfacesTablaSchema);