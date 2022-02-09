const router= require('express').Router();
const itemController = require("../item.js")

router.get("/users",itemController.getKid);
router.post('/users',itemController.addKids);
router.put('/users',itemController.updates)

module.exports=router;