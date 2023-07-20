const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Todo_list")


const Database = mongoose.connection;

Database.on("error", console.error.bind(console, "error from the database"))

Database.once("open", function(){
    console.log("Database is connected to server")
})