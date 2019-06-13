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
.post(middleware.authenticate, toDoController.createToDoItem)
.get(middleware.authenticate, toDoController.getAllItems)

router.route('/toDOItem/:id')
    .delete(middleware.authenticate, toDoController.deleteItem)
    .put(middleware.authenticate, toDoController.toggleItem)
    .get(middleware.authenticate, toDoController.getItem)

router.route('/register').post(userController.register)


router.route('/login').post( userController.login)

router.route('/logout')
    .get(middleware.authenticate, userController.logout)
 

module.exports = router

