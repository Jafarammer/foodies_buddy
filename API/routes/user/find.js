const router = require("express").Router();
// controller
const controllers = require("../../controller/user/find.js");

router.get("/", controllers.findAll);

module.exports = router;
