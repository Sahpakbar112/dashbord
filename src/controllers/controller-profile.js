// const pgp = require("pg-promise")();
// const bf = require("blowfish");
// const bcrypt = require("bcryptjs");
// const config = require("../configs/database");

// //let mysql = require("mysql");
// const pool = pgp(config);

// // pool.on("error", (err) => {
// //   console.error(err);
// // });

// module.exports = {
//   profile(req, res) {
//     let id = req.session.id;
//     pool.getConnection(function (err, connection) {
//       if (err) throw err;
//       connection.query(
//         `
//                 SELECT * FROM users where id = '${id}';
//                 `,
//         function (error, results) {
//           if (error) throw error;
//           res.render("profile", {
//             url: "http://localhost:5050/",
//             userName: req.session.user_name,
//             nama: results[0]["user_name"],
//             full_name: results[0]["full_name"],
//           });
//         }
//       );
//       connection.release();
//     });
//   },
// };
