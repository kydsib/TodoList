const mongoose = require('mongoose')

let ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true,
        default: false
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

let ToDoModel = mongoose.model('ToDoItems', ToDoSchema)

module.exports = ToDoModel