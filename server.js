const port = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const heroController = require("./controller/hero.controller");
const mahasiswaController = require("./controller/mahasiswa.controller");
const res = require("express/lib/response");

// Set EJS & Body Parser

server.use(express.static("public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.set("view engine", "ejs");
server.set("views", "view");

server.get("/", (req, res) => {
  res.render("index");
});

server.use("/hero", heroController);

server.use("/mahasiswa", mahasiswaController);

server.use("/", (req, res) => {
  res.status(404);
  res.render("error");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
