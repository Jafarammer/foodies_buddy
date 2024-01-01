const router = require("express").Router();
// controller
const controllers = require("../../controller/user/find.js");

router.get("/", controllers.findAll);
router.get("/:id", controllers.findById);

module.exports = router;
