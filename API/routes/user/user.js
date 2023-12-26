const router = require("express").Router();
// controller
const controllers = require("../../controller/user/user");

router.get("/", controllers.user);

module.exports = router;
