var express = require('express');
var router = express.Router();
var incomingTenderController = require("../controllers/incomingTenderController")
const currentTenderController = require("../controllers/currentTenderController");
router.get('/', incomingTenderController.getAllTenders)
router.get('/new', incomingTenderController.renderCreationForm)
router.post("/new", incomingTenderController.createTender)
router.get("/:id", incomingTenderController.getOneTender)
module.exports = router;