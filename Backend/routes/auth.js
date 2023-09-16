// backend/routes/auth.js
const express = require('express');
const router = express.Router();

// Simulated user database (replace with a proper database)
const users = [];

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  // Simulate user registration (you would typically hash passwords)
  users.push({ username, email, password });
  res.json({ message: 'Registration successful' });
});

module.exports = router;
