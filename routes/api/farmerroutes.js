require("dotenv").config();
const axios = require("axios");
const db = require("../../models");
const path = require("path");
const farmerController = require("../../controllers/farmercontroller");
const router = require("express").Router();

router.get("/user", farmerController.getUser);

router.put("/user", farmerController.updateUser);

router.get("/produce", farmerController.findfarmersByProduce);

module.exports = router;
