const router = require("express").Router();
// controllers
const controllers = require("../../controller/recipe/find");

router.get("/", controllers.findAll);
router.get("/:id", controllers.findById);

module.exports = router;
