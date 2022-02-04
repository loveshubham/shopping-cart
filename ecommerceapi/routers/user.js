const router = require('express').Router()
const usercontroller = require('../controller/userController')
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('../utils/verifyToken')

router.get('/',verifyTokenAndAdmin,usercontroller.allUser)
router.put('/:id',verifyTokenAndAuthorization,usercontroller.updateUser)

router.delete('/:id',verifyTokenAndAuthorization,usercontroller.deleteUser)

router.get('/:id',verifyTokenAndAdmin,usercontroller.searchUserById)
module.exports = router
