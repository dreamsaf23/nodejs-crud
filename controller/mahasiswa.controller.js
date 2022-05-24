const express = require("express");
const router = express.Router();
const Mahasiswa = require("../model/Mahasiswa.model");

router.get("/", (req, res) => {
  Mahasiswa.getMahasiswa(res);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Mahasiswa.getMahasiswaById(id, res);
});

router.get("/:id/updateMahasiswa/:id", (req, res) => {
  const id = req.params.id;
  Mahasiswa.updateMahasiswaById(id, res);
});

router.get("/:id/updateMahasiswa/:id", (req, res) => {
  const list = {
    id: req.body.id,
    nrp: req.body.nrp,
    name: req.body.name,
    email: req.body.email,
    jurusan: req.body.jurusan,
  };
  Mahasiswa.updateMahasiswaById(list, res);
});

router.post("/ubahMahasiswa", (req, res) => {
  const list = {
    id: req.body.id,
    nrp: req.body.nrp,
    name: req.body.name,
    email: req.body.email,
    jurusan: req.body.jurusan,
  };
  Mahasiswa.ubahMahasiswaById(list, res);
});

router.post("/removeMahasiswa", (req, res) => {
  const id = req.body.id;
  Mahasiswa.removeMahasiswa(id, res);
});

router.post("/removeMahasiswa", (req, res) => {
  const id = req.body.id;
  Mahasiswa.removeMahasiswa(id, res);
});

router.post("/addMahasiswa", (req, res) => {
  const list = {
    nrp: req.body.nrp,
    name: req.body.name,
    email: req.body.email,
    jurusan: req.body.jurusan,
  };
  Mahasiswa.addMahasiswa(list, res);
});

module.exports = router;
