const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const server = express();
const port = process.env.PORT_DEV;

const app = require("./app");
server.use("/", app);

server.listen(port, () => {
  console.log(`server running in port http://localhost:${port}`);
});
