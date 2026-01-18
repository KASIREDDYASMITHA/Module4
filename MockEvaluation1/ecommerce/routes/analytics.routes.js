const express = require('express');
const router = express.Router();
const { readDB } = require('../utils/db');

// All Orders with Count
router.get('/allorders', (req, res) => {
  const db = readDB();
  const orders = db.orders.map(o => o); // using map
  res.json({ count: orders.length, orders });
});

// Cancelled Orders with Count
router.get('/cancelled-orders', (req, res) => {
  const db = readDB();
  const cancelled = db.orders.filter(o => o.status === "cancelled");
  res.json({ count: cancelled.length, cancelled });
});

// Shipped Orders with Count
router.get('/shipped', (req, res) => {
  const db = readDB();
  const shipped = db.orders.filter(o => o.status === "shipped");
  res.json({ count: shipped.length, shipped });
});

// Total Revenue by Product
router.get('/total-revenue/:productId', (req, res) => {
  const db = readDB();
  const productId = parseInt(req.params.productId);
  const product = db.products.find(p => p.id === productId);

  if (!product) return res.status(404).json({ message: "Product not found" });

  const revenue = db.orders
    .filter(o => o.productId === productId && o.status !== "cancelled")
    .reduce((sum, o) => sum + (o.quantity * product.price), 0);

  res.json({ productId, totalRevenue: revenue });
});

// Overall Revenue
router.get('/alltotalrevenue', (req, res) => {
  const db = readDB();
  const revenue = db.orders
    .filter(o => o.status !== "cancelled")
    .reduce((sum, o) => {
      const product = db.products.find(p => p.id === o.productId);
      return sum + (o.quantity * product.price);
    }, 0);

  res.json({ totalRevenue: revenue });
});

module.exports = router;
