// Route-specific middleware: validates POST /todos/add
module.exports = (req, res, next) => {
  const keys = Object.keys(req.body);

  if (!req.body.title || keys.length !== 1) {
    return res.status(400).json({
      error: "Invalid request body. Only 'title' is allowed",
    });
  }

  next();
};
