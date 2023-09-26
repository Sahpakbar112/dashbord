// const { Pool } = require("pg");
// const express = require("express");
// const session = require("express-session");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");

// const app = express();

// // Konfigurasi koneksi ke database
// const pool = new Pool({
//   database: "dashboard",
//   port: "5432",
//   user: "app_dashboard",
//   password: "D4shb04rd",
//   host: "172.24.4.220",
// });

// app.use(
//   session({
//     secret: "rahasia", // Ganti dengan secret yang lebih kuat
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Halaman login
// app.get("/login", (req, res) => {
//   res.render("login"); // Menggunakan EJS untuk tampilan login
// });

// // Handle proses login
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Cari pengguna berdasarkan username
//     const result = await pool.query(
//       "SELECT * FROM users WHERE user_name = $1",
//       [user_name]
//     );

//     // Jika pengguna ditemukan
//     if (result.rowCount > 0) {
//       const user = result.rows[0];

//       // Bandingkan password yang diinput dengan yang ada di database
//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (passwordMatch) {
//         // Simpan informasi pengguna ke session
//         req.session.id = user.id;
//         req.session.user_name = user.user_name;

//         res.redirect("/"); // Redirect ke halaman dashboard atau halaman setelah login
//       } else {
//         res.render("login", { error: "Kata sandi salah" });
//       }
//     } else {
//       res.render("login", { error: "Pengguna tidak ditemukan" });
//     }
//   } catch (error) {
//     console.error("Terjadi kesalahan:", error);
//     res.render("login", { error: "Terjadi kesalahan saat login" });
//   }
// });

// // Halaman dashboard (contoh)
// app.get("/", (req, res) => {
//   // Pastikan pengguna sudah login sebelumnya
//   if (req.session.id) {
//     res.render("home", { usern_ame: req.session.user_name }); // Menggunakan EJS untuk tampilan dashboard
//   } else {
//     res.redirect("/login"); // Redirect ke halaman login jika belum login
//   }
// });

// // Jalankan server
// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => {
//   console.log(`Server berjalan di port ${PORT}`);
// });
