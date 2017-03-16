/**
 * Created by MaheN on 3/7/2017.
 */
var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;
var bookModel= new Schema({
    title:String,
    author:String,
    genre:String,
    read:Boolean,default:false
});
module.exports = mongoose.model('bookModel',bookModel,'bookApi');