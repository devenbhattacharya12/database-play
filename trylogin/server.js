const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a User model
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});

const User = mongoose.model('User', UserSchema);

// Route to handle storing user data
app.post('/store', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const newUser = new User({ firstName, lastName, email });
    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save user', details: err });
  }
});

// Serve the HTML file when accessing the root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
