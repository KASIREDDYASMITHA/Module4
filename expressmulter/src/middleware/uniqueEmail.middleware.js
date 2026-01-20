const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../db.json");

const readDB = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));

module.exports = (req, res, next) => {
  const db = readDB();
  const { email } = req.body;

  const existingUser = db.users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({ error: "Email already exists" });
  }

  next();
};
