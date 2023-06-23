const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num', (req, res) => {
  // Extract the number from the request body
  const { num } = req.body;

  // Check if the number is valid
  if (!Number.isInteger(num)) {
    return res.status(400).json({
      status: 'failure',
      message: 'Invalid number'
    });
  }

  // Calculate the next number
  const nextNumber = num + 1;

  res.json({
    status: 'success',
    message: nextNumber
  });
});

module.exports = app;
