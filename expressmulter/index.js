const express = require("express");
const usersRouter = require("./routes/users.routes");

const app = express();
app.use(express.json());

// Routes
app.use("/users", usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
