var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
    original:String,//the original url
    shorted:String,//shorted prefix
    created:Date,//created data
    used:Number
});

module.exports = mongoose.model('url', urlSchema);
