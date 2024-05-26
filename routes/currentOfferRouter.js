var express = require('express');
var currentOfferController = require("../controllers/currentOfferController")
var router = express.Router();

router.get('/:tid/new', currentOfferController.renderForm)
router.post("/new", currentOfferController.createOffer)

module.exports = router;