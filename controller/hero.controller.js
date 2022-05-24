const express = require("express");
const router = express.Router();
const Hero = require("../model/Hero.model");

router.get("/", (req, res) => {
  Hero.getHero(res);
});

// router.get("/addHero", (req, res) => {
//   Hero.tambahHero(res);
// });

// router.post("/addHero", (req, res) => {
//   const list = {
//     name: req.body.name,
//     role: req.body.role,
//     winrate: req.body.role,
//   };
//   Hero.addHero(list, res);
// });

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Hero.getHeroById(id, res);
});

router.get("/:id/updateHero/:id", (req, res) => {
  const id = req.params.id;
  Hero.updateHeroById(id, res);
});

router.post("/ubahHero", (req, res) => {
  const list = {
    id: req.body.id,
    name: req.body.name,
    role: req.body.role,
    winrate: req.body.winrate,
  };
  Hero.ubahHeroById(list, res);
});

router.post("/removeHero", (req, res) => {
  const id = req.body.id;
  Hero.removeHero(id, res);
});

router.post("/addHero", (req, res) => {
  const list = {
    name: req.body.name,
    role: req.body.role,
    winrate: req.body.winrate,
  };
  Hero.addHero(list, res);
});

module.exports = router;
