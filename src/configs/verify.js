//const userRoles = require("../controllers/userRoles");

module.exports = {
  isLogin(req, res, next) {
    if (req.session.loggedin === true) {
      next();
      return;
    } else {
      req.session.destroy(function (err) {
        res.redirect("/login");
      });
    }
  },
  isLogout(req, res, next) {
    if (req.session.loggedin !== true) {
      next();
      return;
    }
    res.redirect("/");
  },
  isAdmin(req, res, next) {
    // Periksa apakah pengguna memiliki peran "admin"
    if (req.session.loggedin && req.session.role === "user") {
      next();
    } else {
      res.redirect("/login"); // Redirect jika pengguna bukan "admin"
    }
  },
};
