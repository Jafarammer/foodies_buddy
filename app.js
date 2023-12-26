const express = require("express");
const app = express();

app.use(express.json());
// user routes
const userRoutes = require("./API/routes/user/user.js");
const userFindRoutes = require("./API/routes/user/find.js");
app.use("/user", userRoutes);
app.use("/user", userFindRoutes);

module.exports = app;
