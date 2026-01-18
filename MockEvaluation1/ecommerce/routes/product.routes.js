const express = require('express');
const router = express.Router();
const { readDB, writeDB } = require('../utils/db');

// Get all products
router.get('/', (req, res) => {
  const db = readDB();
  res.status(200).json(db.products);
});

// Add product
router.post('/', (req, res) => {
  const db = readDB();
  const newProduct = { id: Date.now(), ...req.body };
  db.products.push(newProduct);
  writeDB(db);
  res.status(201).json(newProduct);
});

module.exports = router;
