const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.log('Error connecting to MongoDB', err);
});

// Define a Schema and Model for the User
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

const User = mongoose.model('User', userSchema);

// Route to handle storing user data in MongoDB
app.post('/store', async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    // Create a new user document and save it to the database
    const newUser = new User({ firstName, lastName });
    await newUser.save();

    // Send the saved user data back as the response
    res.json(newUser);
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ message: 'Error saving user data' });
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
