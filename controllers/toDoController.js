const ToDoModel = require('../models/toDoModel')

let createToDoItem = (req, res) => {
    let data = req.body
    let todo = new ToDoModel()
    todo.title = data.title
    todo.creator = req.user._id
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