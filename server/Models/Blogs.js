const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    
    title : {
        type : String,
        required : true
    },
    
    content : {
        type : String,
        required : true
    },
    
    author : {
        type : String,
        trim : true,
        min : 5,
        max : 50,
        required : true,
    },
    
    description : {
        type : String,
        required : true
    },
    
    imgUrl : {
        type : String,
        default : ""
    },
    
    upVotes : {
        type : Number,
        default : 0
    },
    
    date : {
        type : Date,
        default : Date.now
    }
    
}, { timestamps : true });


module.exports = mongoose.model("Blog", blogSchema);