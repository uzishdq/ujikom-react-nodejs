import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "unibookstore",
});

app.get("/", (req, res) => {
  res.send("Koneksi Berhasil");
});

app.get("/buku", (req, res) => {
  const sql = `SELECT * FROM buku`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/buku/:id", (req, res) => {
  const idBuku = req.params.id;
  const sql = `SELECT * FROM buku WHERE ID_BUKU = ? `;
  db.query(sql, [idBuku], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/buku", (req, res) => {
  const sql =
    "INSERT INTO buku (`ID_BUKU`,`ID_PENERBIT`,`NAMA_BUKU`,`KATEGORI_BUKU`,`HARGA_BUKU`,`STOK_BUKU`) VALUES (?)";
  const values = [
    req.body.idBuku,
    req.body.idPenerbit,
    req.body.namaBuku,
    req.body.kategoriBuku,
    req.body.hargaBuku,
    req.body.stokBuku,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Buku berhasil ditambahkan");
  });
});

app.post("/buku/:id", (req, res) => {
  const idBuku = req.params.id;
  const sql =
    "UPDATE buku SET NAMA_BUKU = ?, KATEGORI_BUKU = ?, HARGA_BUKU = ?, STOK_BUKU = ?, ID_PENERBIT = ? WHERE ID_BUKU = ?";
  const values = [
    req.body.namaBuku,
    req.body.kategoriBuku,
    req.body.hargaBuku,
    req.body.stokBuku,
    req.body.idPenerbit,
  ];
  db.query(
    sql,
    [
      req.body.namaBuku,
      req.body.kategoriBuku,
      req.body.hargaBuku,
      req.body.stokBuku,
      req.body.idPenerbit,
      idBuku,
    ],
    (err, _) => {
      if (err) return res.json(err);
      return res.json("Buku berhasil di edit!");
    }
  );
});

app.delete("/buku/:id", (req, res) => {
  const idBuku = req.params.id;
  const sql = `DELETE FROM buku WHERE ID_BUKU = ? `;
  db.query(sql, [idBuku], (err, data) => {
    if (err) return res.json(err);
    return res.json("Buku berhasil dihapus !!!");
  });
});

app.get("/penerbit", (req, res) => {
  const sql = `SELECT * FROM penerbit`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/penerbit", (req, res) => {
  const sql =
    "INSERT INTO penerbit (`ID_PENERBIT`, `NAMA_PENERBIT`, `ALAMAT_PENERBIT`, `KOTA_PENERBIT`, `TLP`) VALUES (?)";
  const values = [
    req.body.idPenerbit,
    req.body.namaPenerbit,
    req.body.alamatPenerbit,
    req.body.kotaPenerbit,
    req.body.tlp,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Penerbit berhasil ditambahkan");
  });
});

app.delete("/penerbit/:id", (req, res) => {
  const idPenerbit = req.params.id;
  const sql = `DELETE FROM penerbit WHERE ID_PENERBIT = ? `;
  db.query(sql, [idPenerbit], (err, data) => {
    if (err) return res.json(err);
    return res.json("Penerbit berhasil dihapus !!!");
  });
});

app.get("/pengadaan", (req, res) => {
  const sql = `SELECT * FROM buku ORDER BY STOK_BUKU LIMIT 5`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(3001, () => {
  console.log("helo");
});
