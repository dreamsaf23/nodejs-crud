const db = require("../config");

// Menampilkan semua data yg ada di Database

exports.getHero = (res) => {
  // Query Data

  const sql = "SELECT * FROM `hero`";

  // Execute Data

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error);

    // Response Data
    const hero = {
      title: "HERO PAGE",
      subtitle: "DAFTAR HERO",
      list: JSON.parse(JSON.stringify(result)), // Data dari Database
    };

    res.render("hero", { hero });
    res.end();
  });
};

// Mengambil data dengan ID

exports.getHeroById = (id, res) => {
  const sql = `SELECT * FROM hero WHERE id = ${id}`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);

    const hero = {
      title: "DETAIL HERO PAGE",
      subtitle: "DETAIL HERO",
      list: JSON.parse(JSON.stringify(result)),
    };
    res.render("detailHero", { hero });
    res.end();
  });
};

// Mengambil data dengan ID dan Ubah / Edit / Update Hero

exports.updateHeroById = (id, res) => {
  const sql = `SELECT * FROM hero WHERE id = ${id}`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);

    const hero = {
      title: "UBAH HERO PAGE",
      subtitle: "UPDATE HERO",
      list: JSON.parse(JSON.stringify(result)),
    };
    res.render("updateHero", { hero });
    res.end();
  });
};

exports.ubahHeroById = (list, res) => {
  const id = list.id;
  const name = list.name;
  const role = list.role;
  const winrate = list.winrate;

  const sql = `UPDATE hero SET name = '${name}', role = '${role}', winrate = '${winrate}' WHERE id = '${id}'`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    res.redirect("/hero");
    res.end();
  });
};

// Menghapus Data Hero dengan ID

exports.removeHero = (id, res) => {
  const sql = `DELETE FROM hero WHERE id='${id}'`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    res.redirect("/hero");
    res.end();
  });
};

// Menambahkan Data Hero

exports.addHero = (list, res) => {
  const name = list.name;
  const role = list.role;
  const winrate = list.winrate;

  const sql = `INSERT INTO hero (name, role, winrate) VALUES ('${name}', '${role}', '${winrate}')`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    res.redirect("/hero");
    res.end();
  });
};

// exports.tambahHero = (id, res) => {
//   const sql = `SELECT * FROM hero WHERE id = ${id}`;

//   db.query(sql, (error, result) => {
//     if (error) return console.log("error", error);

//     const hero = {
//       title: "ADD HERO PAGE",
//       subtitle: "Form Tambah Hero ",
//       list: JSON.parse(JSON.stringify(result)),
//     };
//     res.render("addHero", { hero });
//     res.end();
//   });
// };

// exports.tambahHero = (req, res) => {
//   res.render("addHero", {
//     title: "ADD HERO PAGE",
//     subtitle: "Form Tambah Hero",
//   });
// };

// exports.addHero = (list, res) => {
//   const name = list.name;
//   const role = list.role;
//   const winrate = list.winrate;

//   const sql = `INSERT INTO hero (name, role, winrate) VALUES ('${name}', '${role}', '${winrate}')`;

//   db.query(sql, (error, result) => {
//     if (error) return console.log("error", error);
//     res.redirect("/hero");
//     res.end();
//   });
// };
