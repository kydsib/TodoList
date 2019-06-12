const User = require('../models/userModel')

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
    console.log('form login', req.someting)
    let data = req.body
    user.findOne({email: data.email})
    .then((user) => {
        if (!user) {
            res.json('No sutch user')
        } else {
            if (user.password === data.password){
                res.json('Sucessfull login')
            } else {
                res.json('Wrong password')
            }
        }
    })
    .catch(r => res.status(400).json(e))
}


module.exports = {
    register,
    login
}