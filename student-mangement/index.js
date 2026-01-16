import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;
const DB_FILE = "./db.json";

app.use(express.json());

// Utility function to read data
const readData = () => {
  const data = fs.readFileSync(DB_FILE);
  return JSON.parse(data);
};

// Utility function to write data
const writeData = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// ✅ GET /students - Fetch all students
app.get("/students", (req, res) => {
  const students = readData();
  res.json(students);
});

// ✅ POST /students - Add new student
app.post("/students", (req, res) => {
  const students = readData();
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  writeData(students);
  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// ✅ PUT /students/:id - Update student
app.put("/students/:id", (req, res) => {
  const students = readData();
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[index] = { ...students[index], ...req.body };
  writeData(students);
  res.json({ message: "Student updated successfully", student: students[index] });
});

// ✅ DELETE /students/:id - Delete student
app.delete("/students/:id", (req, res) => {
  const students = readData();
  const id = parseInt(req.params.id);
  const filtered = students.filter((s) => s.id !== id);

  if (students.length === filtered.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  writeData(filtered);
  res.json({ message: "Student deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
