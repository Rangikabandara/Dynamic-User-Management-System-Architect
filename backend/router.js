const express = require('express')
const router = express.Router(); 
const controller = require('./controller');


router.get('/users',controller.getUsers); 
router.post('/createuser', controller.addUser);
router.post('/updateuser',controller.userUpdate);
router.post('/deleteuser',controller.userDelete);


module.exports = router;