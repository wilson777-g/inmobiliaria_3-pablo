// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando correctamente ✅');
});

// Obtener propiedades
app.get('/api/propiedades', (req, res) => {
  db.query('SELECT * FROM propiedades', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Obtener imágenes de propiedades
app.get('/api/imagenes', (req, res) => {
  db.query('SELECT * FROM imagenes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Obtener videos de propiedades
app.get('/api/videos', (req, res) => {
  db.query('SELECT * FROM videos', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));

