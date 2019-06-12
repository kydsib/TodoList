const router = require('express').Router();
const toDoController = require('../controllers/toDoController')
const userController = require('../controllers/userController')
const middleware = require('../middleware/middleware')


router.get('/', (request, response) => {
    response.json({
        data: {
            message: "API is working!"
        },
        timestamp: new Date().getTime()
    })
});

router.route('/toDoItem')
.post(toDoController.createToDoItem)
.get(toDoController.getAllItems)


router.route('/register').post(userController.register)


router.route('/login').post(middleware.authenticate, userController.login)

module.exports = router

