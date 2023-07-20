const Todo_list = require("../model/Todolist")

//  controller for get route 

module.exports.input = function(req,res){
    Todo_list.find({}).then((Todolist)=>{
        res.render("Input",{
            title:"TodoList",  
            list: Todolist
        })
    }).catch((err)=>{
       console.log("Hey there is some error while fetching the file ", err)
    })
}

//  controller for post route (to create document in database) 

module.exports.list = function(req,res){
    let list =req.body
    Todo_list.create({
        Todo: list.Todo,
        Category: list.Category,
        Date: list.Date
    })
    return res.redirect("back")
}


//  controller for delete route (to delete document in database) 

module.exports.RemoveList = function(req,res){
    let id = req.query.id
    Todo_list.findByIdAndDelete(id).then(()=>{
      return res.redirect("back")
    }).catch((err)=>{
        console.log("err while deleting the data",err)
    })
}