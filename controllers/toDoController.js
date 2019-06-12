const ToDoModel = require('../models/toDoModel')

let createToDoItem = (req, res) => {
    let data = req.body
    let todo = new todoModel()
    todo.title = data.title
    todo.save().then((item => {
        res.json(item)
    }))
    .catch(e => res.satus(400).json(e))
    // res.json(data)
}

let getAllItems = (req, res) => {
    ToDoModel.find().then((items) => {
        res.json(items)
    })
}

let createUser = (req, res) => {
    let data = req.body
    let user = new userModel()
    user.name = data.name
    user.email = data.email
    user.password = data.password
    user.save().then((item => {
        res.json(item)
    }))
    .catch(e => res.satus(400).json(e))
}

module.exports = {
    createToDoItem,
    getAllItems
}