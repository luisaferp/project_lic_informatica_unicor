const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const UsuariosSchema = new Schema({
    nombre : {
        type : String,
        require: true
    },
    contrasenna : {
        type : String,
        require: true
    }
});

module.exports = Usuarios = mongoose.model('usuarios',UsuariosSchema);