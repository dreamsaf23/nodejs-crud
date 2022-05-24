const db = require("../config");

exports.getMahasiswa = (res) => {
  const sql = "SELECT * FROM `mahasiswa`";

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error);

    const mahasiswa = {
      title: "MAHASISWA PAGE",
      subtitle: "DAFTAR MAHASISWA",
      list: JSON.parse(JSON.stringify(result)), // Data dari Database
    };

    res.render("mahasiswa", { mahasiswa });
    res.end();
  });
};

exports.getMahasiswaById = (id, res) => {
  const sql = `SELECT * FROM mahasiswa WHERE id = ${id}`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);

    const mahasiswa = {
      title: "DETAIL MAHASISWA PAGE",
      subtitle: "DETAIL MAHASISWA",
      list: JSON.parse(JSON.stringify(result)),
    };
    res.render("detailMahasiswa", { mahasiswa });
    res.end();
  });
};

exports.updateMahasiswaById = (id, res) => {
  const sql = `SELECT * FROM mahasiswa WHERE id = ${id}`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);

    const mahasiswa = {
      title: "UBAH MAHASISWA PAGE",
      subtitle: "UPDATE MAHASISWA",
      list: JSON.parse(JSON.stringify(result)),
    };
    res.render("updateMahasiswa", { mahasiswa });
    res.end();
  });
};

exports.ubahMahasiswaById = (list, res) => {
  const id = list.id;
  const nrp = list.nrp;
  const name = list.name;
  const email = list.email;
  const jurusan = list.jurusan;

  const sql = `UPDATE mahasiswa SET nrp = '${nrp}', name = '${name}', email = '${email}', jurusan = '${jurusan}' WHERE id = '${id}'`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    res.redirect("/mahasiswa");
    res.end();
  });
};

exports.removeMahasiswa = (id, res) => {
  const sql = `DELETE FROM mahasiswa WHERE id='${id}'`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    res.redirect("/mahasiswa");
    res.end();
  });
};

exports.addMahasiswa = (list, res) => {
  const nrp = list.nrp;
  const name = list.name;
  const email = list.email;
  const jurusan = list.jurusan;

  const sql = `INSERT INTO mahasiswa (nrp, name, email, jurusan) VALUES ('${nrp}', '${name}', '${email}', '${jurusan}')`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    res.redirect("/mahasiswa");
    res.end();
  });
};
