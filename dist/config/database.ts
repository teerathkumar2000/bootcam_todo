import mongoose from 'mongoose';
const uri : string = 'mongodb+srv://teerathkumar:tukrani@cluster0-g3saw.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true})
module.exports = mongoose;