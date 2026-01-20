// Route-level middleware: limits GET /todos to 15 requests per minute per IP
let requestCounts = {};
const WINDOW_SIZE = 60 * 1000; // 1 minute
const MAX_REQUESTS = 15;

module.exports = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requestCounts[ip]) {
    requestCounts[ip] = [];
  }

  // Keep only requests within the last minute
  requestCounts[ip] = requestCounts[ip].filter(
    (timestamp) => currentTime - timestamp < WINDOW_SIZE
  );

  if (requestCounts[ip].length >= MAX_REQUESTS) {
    return res.status(429).json({
      error: "Too many requests, please try again later",
    });
  }

  requestCounts[ip].push(currentTime);
  next();
};
