const mongoose = require('mongoose')
const Schema = mongoose.Schema

const uploadSchema = new mongoose.Schema({
    photo :{
        type : String,
        required :true,
    }, 
},
{timestamps :true}
)

module.exports = mongoose.model("Photo" , uploadSchema);