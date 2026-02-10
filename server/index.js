const express = require("express");

const app = express();
const PORT = 5000;

// Test route
app.get("/", (req, res) => {
  res.send("Secure & Smart E-Commerce Backend is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
