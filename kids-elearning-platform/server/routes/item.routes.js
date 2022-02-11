const router= require('express').Router();
const itemController = require("../item.js")


router.get("/",itemController.getKid);
router.post('/',itemController.addKids);
router.put('/',itemController.updates)

module.exports=router;