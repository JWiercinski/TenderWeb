var express = require('express');
var router = express.Router();
const archiveOfferController = require("../controllers/archiveOfferController");
router.get('/:tid', archiveOfferController.getOffers)
module.exports=router