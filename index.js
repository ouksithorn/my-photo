const express = require('express');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Serve HTML form for uploading photos
app.get('/', (req, res) => {
  res.send(`
    <h1>Upload a Photo</h1>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="photo" accept="image/*" required />
      <button type="submit">Upload</button>
    </form>
  `);
});

// Handle photo upload
app.post('/upload', upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send(`Photo uploaded: <img src="/uploads/${req.file.filename}" width="300" />`);
});

// Serve uploaded photos
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});