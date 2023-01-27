const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const InfografiasSchema = new Schema({
    link : {
        type : String,
        require: true
    }
});

module.exports = Infografias = mongoose.model('infografias',InfografiasSchema);