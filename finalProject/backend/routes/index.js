
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const  ChangePassword = require('../controller/changedPassword');
const loginActivity = require('../controller/loginActivity');
const certificateCotroller = require('../controller/certificateController')
const skillsController = require('../controller/skillsController')
const viewDataController = require('../controller/viewDataController')
router.post('/DetailSaved', userController.saveDetail);
router.post('/updatePassword',ChangePassword.updatePassword)
router.post('/login',loginActivity.login)
router.post('/certificateDetails',certificateCotroller.userCertificate)
router.post('/skills',skillsController.userSkills)
router.post('/viewData',viewDataController.viewData)


module.exports = router;
