const mongoose = require('mongoose');
const { strip } = require('wd/lib/utils');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const VideosSchema = new Schema({
    link : {
        type : String,
        require: true
    }
});

module.exports = videos = mongoose.model('videos',VideosSchema);