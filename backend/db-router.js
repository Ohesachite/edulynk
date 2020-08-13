const express = require('express');
const controller = require('db-router.js');
  
const router = express.Router();

router.post('/register', controller.register);

router.get('/checklogin', controller.checkLogin);

router.delete('/delete', controller.deleteLogin);

module.exports = router;