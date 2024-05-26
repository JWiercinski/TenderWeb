var express = require('express');
var router = express.Router();
var archiveTenderController = require("../controllers/archiveTenderController")
router.get('/', archiveTenderController.getAllTenders)
router.get("/:id", archiveTenderController.getOneTender)
module.exports = router;