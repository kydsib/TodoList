const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-vadidator')


let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})


let User = mongoose.model('User', UserSchema)

module.exports = UserModel;
