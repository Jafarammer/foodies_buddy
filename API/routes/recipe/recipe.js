const router = require("express").Router();
// controllers
const controllers = require("../../controller/recipe/recipe");

router.post("/", controllers.creatingData);

module.exports = router;
