const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {
    secretSalt
} = require('../config/config')

let register = (req, res) => {
    let data = req.body
    let user = new User()
    user.email = data.email
    user.password = data.password
    user.save()
      .then((item) => {
        res.json(item)
      })
      .catch(e => res.status(400).json(e))
  }
  
  let login = (req, res) => {
    
    let data = req.body
    User.findOne({
        email: data.email
      })
      .then((user) => {
        if(!user){
            res.json('No user withs this email')
            return
        }
        bcrypt.compare(data.password, user.password, (err, response) => {
            if (response) {
                let access = 'auth'
                let token = jwt.sign({
                    _id: user._id.toHexString(),
                    access
                }, secretSalt).toString()
                user.tokens.push({
                    access,
                    token
                })
                user.save()
                .then((useris) => {
                    res.header('x-auth', token).json(useris)
                })
            } else {
                res.json('incorrect password')
            }
        })
      })
      .catch(e => res.status(400).json(e))
  }

  let logout = (req, res) => {
      
  }

module.exports = {
    register,
    login
}