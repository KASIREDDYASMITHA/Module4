const multer = require("multer");

// Multer storage (in memory, since we'll upload to Cloudinary)
const storage = multer.memoryStorage();

// File filter: only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
});

module.exports = upload.single("profile");
