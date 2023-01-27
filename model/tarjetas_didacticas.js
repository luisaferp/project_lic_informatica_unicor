const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const TarjetasDidacticasSchema = new Schema({
    enunciado : {
        type : String,
        require: true
    },
    formato : {
        type : String,
        require: true
    }
});

module.exports = TarjetasDidacticas = mongoose.model('tarjetas_didacticas',TarjetasDidacticasSchema);