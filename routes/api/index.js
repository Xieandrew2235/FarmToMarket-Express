const router = require("express").Router();
const farmerRoutes = require("./farmerroutes");

router.use("/farmers", farmerRoutes);

module.exports = router;