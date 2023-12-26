const router = require("express").Router();
// controller
const controllers = require("../../controller/user/user");

router.post("/", controllers.creatingData);

module.exports = router;
