// const config = require("../configs/database");

// const pool = pgp(config);

// // Fungsi untuk mengautentikasi  (id_role) dan (nama_role)
// const authenticateUser = async (id_role, nama_role) => {
//   try {
//     // Cari pengguna berdasarkan ID peran dan nama peran di database
//     const query = "SELECT * FROM users WHERE id_role = $1 AND nama_role = $2";
//     const result = await pool.query(query, [id_role, nama_role]);

//     if (result.rows.length === 0) {
//       return null; // Pengguna tidak ditemukan
//     }

//     const user = result.rows[0];

//     return user; // Otentikasi berhasi
//   } catch (error) {
//     console.error("Terjadi kesalahan:", error);
//     return null; // Terjadi kesalahan saat mengakses database
//   }
// };

// // Fungsi untuk mengizinkan akses
// const authorizeUser = (requiredRole) => {
//   return (req, res, next) => {
//     const user = req.user;

//     if (!user || user.role !== requiredRole) {
//       return res.status(403).send("Akses Ditolak");
//     }

//     next();
//   };
// };

// module.exports = {
//   authenticateUser,
//   authorizeUser,
// };
