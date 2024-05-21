var express = require('express');
var router = express.Router();
var currentTenderController = require("../controllers/currentTenderController")
router.get('/', currentTenderController.getAllTenders)
router.get("/:id", currentTenderController.getOneTender)
module.exports = router;