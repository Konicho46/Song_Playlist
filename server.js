const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Konfigurasi untuk menyimpan foto di folder 'album_images'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/album_images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Menyajikan file HTML untuk halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint untuk upload foto album
app.post('/upload', upload.single('albumImage'), (req, res) => {
  res.redirect('/'); // Redirect kembali ke halaman utama setelah upload
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
