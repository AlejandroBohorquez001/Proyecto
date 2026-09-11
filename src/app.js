const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // O la ruta a tu archivo de rutas

const app = express();

// 1. Configurar CORS para permitir peticiones desde cualquier origen (incluyendo archivos locales)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// 2. Rutas
app.use('/api', routes);

module.exports = app;