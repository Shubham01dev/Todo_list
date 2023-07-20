const mongoose = require("mongoose")


// Creating schema 
const TodolistSchema = new mongoose.Schema({
    Todo : {
        type: String,
        required: true,
    },
    Category:{
        type: String,
        required:true,

    },
    Date:{
        type: String
    }
})


const  Todo_list = mongoose.model("Todo_list", TodolistSchema)

module.exports = Todo_list;
