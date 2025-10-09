// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',          // servidor MySQL
  user: 'root',               // tu usuario MySQL
  password: 'Luis2008@',      // tu contraseña MySQL
  database: 'inmobiliaria_db' // nombre de tu base de datos
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar la base de datos:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos inmobiliaria_db');
});

module.exports = db;
