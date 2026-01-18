const express = require('express');
const router = express.Router();
const { readDB, writeDB } = require('../utils/db');

// Create Order
router.post('/', (req, res) => {
  const { productId, quantity } = req.body;
  const db = readDB();
  const product = db.products.find(p => p.id === productId);

  if (!product) return res.status(404).json({ message: "Product not found" });
  if (product.stock === 0 || quantity > product.stock) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  const totalAmount = product.price * quantity;
  const newOrder = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount,
    status: "placed",
    createdAt: new Date().toISOString().split('T')[0]
  };

  db.orders.push(newOrder);
  product.stock -= quantity;
  writeDB(db);

  res.status(201).json(newOrder);
});

// Get all orders
router.get('/', (req, res) => {
  const db = readDB();
  res.status(200).json(db.orders);
});

// Cancel Order
router.delete('/:orderId', (req, res) => {
  const db = readDB();
  const order = db.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled") return res.status(400).json({ message: "Already cancelled" });

  const today = new Date().toISOString().split('T')[0];
  if (order.createdAt !== today) return res.status(400).json({ message: "Cancellation not allowed" });

  order.status = "cancelled";
  const product = db.products.find(p => p.id === order.productId);
  product.stock += order.quantity;
  writeDB(db);

  res.status(200).json(order);
});

// Change Order Status
router.patch('/change-status/:orderId', (req, res) => {
  const db = readDB();
  const order = db.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled" || order.status === "delivered") {
    return res.status(400).json({ message: "Cannot change status" });
  }

  const validFlow = { placed: "shipped", shipped: "delivered" };
  order.status = validFlow[order.status];
  writeDB(db);

  res.status(200).json(order);
});

module.exports = router;
