const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const server = express();
const port = process.env.PORT_DEV;
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error db", (error) => console.error(error));
db.once("open", () => console.log("Connection database"));

const app = require("./app");
server.use("/", app);

server.listen(port, () => {
  console.log(`server running in port http://localhost:${port}`);
});
