require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongooose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

mongooose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected')).catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/contact', (req, res) => {
  const { name, age, email, message } = req.body;

  if (!name || !age || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Log the received message to the console
  console.log('--- New Contact Form Submission ---');
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log('-----------------------------------');

  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.get('/', (req, res) => {
  res.send('Server Is Running')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
