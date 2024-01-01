const express = require("express");
const app = express();

app.use(express.json());
// user routes
const userRoutes = require("./API/routes/user/user.js");
const userFindRoutes = require("./API/routes/user/find.js");
app.use("/user", userRoutes);
app.use("/user", userFindRoutes);
// recipe routes
const recipeRoutes = require("./API/routes/recipe/recipe.js");
const recipeFindRoutes = require("./API/routes/recipe/find.js");
app.use("/recipe", recipeRoutes);
app.use("/recipe", recipeFindRoutes);

module.exports = app;
