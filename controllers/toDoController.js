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
    ToDoModel.find({
        creator: req.user._id
    }).then((items) => {
        res.json(items)
    })
}

let deleteItem = (req, res) => {
    let id = req.param('id')
    ToDoModel.deleteOne({
        _id: id,
        creator: req.user._id 
    })
    .then((response) => {
        res.json(response)
    })
    .catch(e => res.status(400).json(e))
}

let toggleItem = (req, res) => {
    let id = req.param('id')
    ToDoModel.findOne({
        _id: id,
        creator: req.user._id
    })
    .then((item) => {
        item.checked = !item.checked
        item.save()
        .then(savedItem => res.json(savedItem))
    })
    .catch(e => res.status(400).json(e))
}

let getItem = (req, res) => {
    let id = req.param('id')
    ToDoModel.findOne({
        _id: id,
        creator: req.user._id
    })
    .then((item) => {
     res.json(item)
    })
    .catch(e => res.status(400).json(e))
}

module.exports = {
    createToDoItem,
    getAllItems,
    deleteItem,
    toggleItem,
    getItem
}