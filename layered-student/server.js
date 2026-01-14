const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// serve static files จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, "public")));

// ถ้าอยากให้ route "/" ส่งไฟล์ index.html แบบเจาะจง ก็ทำแบบนี้
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
