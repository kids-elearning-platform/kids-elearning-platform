const router= require('express').Router();
const itemController = require("../item.js")


router.post('/signup',itemController.addKids);//Checked
router.post('/login',itemController.getKid);
router.put('/users',itemController.updates);
router.post('/admin',itemController.addQuizzByCategory);
router.get("/admin",itemController.getQuizzByCategory);


module.exports=router;