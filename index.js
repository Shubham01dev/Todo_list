// initializing express server
const express = require("express")
const port = 3000
const app = express();
const bodyParser = require("body-parser")
const db = require("./config/database")
const Todo_list = require("./model/Todolist")
// settingup templates

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("./public"))

// getting data from input

app.use(bodyParser.urlencoded({extended: true}))

// router
const route = require("./route/home")
app.use("/", route)




// Checking server is running or not

app.listen(port,function(err){
    if(err){
        console.log("Error while running Server",err)
    }
    console.log("Server is up at port no :", port)
})