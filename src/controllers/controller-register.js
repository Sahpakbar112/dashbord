// const config = require("../configs/database");
// //let mysql      = require('mysql');
// const pgp = require("pg-promise")();
// const bf = require("blowfish");
// const bcrypt = require("bcryptjs");
// let pool = pgp(config);

// // pool.on("error", (err) => {
// //   console.error(err);
// // });

// module.exports = {
//   formRegister(req, res) {
//     res.render("register", {
//       url: "http://localhost:5050/",
//     });
//   },
//   saveRegister(req, res) {
//     let user_name = req.body.user_name;
//     let password = req.body.pass;
//     if (user_name && password) {
//       pool.getConnection(function (err, connection) {
//         if (err) throw err;
//         connection.query(
//           `INSERT INTO users (user_name,password) VALUES (?,SHA2(?,512));`,
//           [user_name, password],
//           function (error, results) {
//             if (error) throw error;
//             req.flash("color", "success");
//             req.flash("status", "Yes..");
//             req.flash("message", "Registrasi berhasil");
//             res.redirect("/login");
//           }
//         );
//         connection.release();
//       });
//     } else {
//       res.redirect("/login");
//       res.end();
//     }
//   },
// };
