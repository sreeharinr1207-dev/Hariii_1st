// Fix: Use lowercase 'r' for require
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// === NEW: DEFINE A SCHEEMA AND MODEL ===
// A Schema defines the structure of your document.
// In image_0.png, the data includes name, age, email, and message.
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // Automatically adds a timestamp
});

// The first argument 'Contact' is the singular name of the collection.
// Mongoose automatically creates a collection named 'contacts' (pluralized, lowercase).
const Contact = mongoose.model('Contact', contactSchema);
// ========================================

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// === UPDATED: POST ROUTE TO SAVE DATA ===
// 1. Added 'async' keyword to the callback function
app.post('/api/contact', async (req, res) => {
  const { name, age, email, message } = req.body;

  // Validation
  if (!name || !age || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Log the received message to the console (for debugging)
  console.log('--- New Contact Form Submission (received) ---');
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log('---------------------------------------------');

  try {
    // 2. Create a new document instance using your data
    const newContact = new Contact({
      name,
      age,
      email,
      message
    });

    // 3. Save the document to the database using 'await'
    // This is the crucial step to actually save data.
    await newContact.save();

    // Respond with success (using status 201 for "Created")
    res.status(201).json({ success: true, message: 'Message received and saved to database successfully!' });
  } catch (error) {
    // If there is an error saving (e.g., a connection issue), send an error response
    console.error('Error saving data to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
// ========================================

app.get('/', (req, res) => {
  res.send('Server Is Running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});