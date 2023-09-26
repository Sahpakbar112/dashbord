const config = require("../configs/database");

const pgp = require("pg-promise")();
const bf = require("blowfish");
const bcrypt = require("bcryptjs");
const userRoles = require("../controllers/userRole");

const pool = pgp(config);

// pool.on("error", (err) => {
//   console.error(err);
// });

module.exports = {
  login(req, res) {
    res.render("login", {
      url: "http://localhost:5050/",
      colorFlash: req.flash("color"),
      statusFlash: req.flash("status"),
      pesanFlash: req.flash("message"),
    });
  },

  async loginAuth(req, res) {
    const { user_name, password } = req.body;

    try {
      // Cari pengguna berdasarkan username
      const result = pool.query("SELECT * FROM users WHERE user_name = $1", [
        user_name,
      ]);

      // Jika pengguna ditemukan
      if (result.rowCount > 0) {
        const user = result.rows[0];
        console.log(rowCount);
        // Bandingkan password yang diinput dengan yang ada di database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // Simpan informasi pengguna ke session
          req.session.loggedin = true;
          req.session.id = user.id;
          req.session.role = userRoles[user.id_role];
          req.session.user_name = user.user_name;
          res.redirect("/");
        } else {
          req.flash("color", "danger");
          req.flash("status", "Oops..");
          req.flash("message", "Kata sandi salah");
          res.redirect("/login");
        }
      } else {
        req.flash("color", "danger");
        req.flash("status", "Oops..");
        req.flash("message", "Akun tidak ditemukan");
        res.redirect("/login");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      req.flash("color", "danger");
      req.flash("status", "Oops..");
      req.flash("message", "Terjadi kesalahan saat mengakses database");
      res.redirect("/login");
    }
  },

  someProtectedRoute(req, res) {
    if (req.session.loggedin && req.session.role === userRoles.ADMIN) {
      // Izinkan akses untuk pengguna dengan peran "admin"
      res.render("/");
    } else if (req.session.loggedin && req.session.role === userRoles.USER) {
      // Izinkan akses untuk pengguna dengan peran "user"
      res.render("/");
    } else {
      // Tidak izinkan akses jika tidak ada sesi atau peran tidak sesuai
      res.redirect("/login");
    }
  },

  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      }
      res.clearCookie("secretName");
      res.redirect("/login");
    });
  },
};
