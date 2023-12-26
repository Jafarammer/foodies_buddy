const express = require("express");
const app = express();

// user routes
const userRoutes = require("./API/routes/user/user");
app.use("/user", userRoutes);

module.exports = app;
