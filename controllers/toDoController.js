const ToDoModel = require('../models/toDoModel')

let createToDoItem = (req, res) => {
    let data = req.body
    let todo = new todoModel()
    todo.title = data.title
    todo.save().then((item => {
        res.json(item)
    }))
    .catch(e => res.satus(400).json(e))
}

let getAllItems = (req, res) => {
    ToDoModel.find().then((items) => {
        res.json(items)
    })
}


module.exports = {
    createToDoItem,
    getAllItems
}