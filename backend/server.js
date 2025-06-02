// File: server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const schemeRoutes = require('./routes/schemeRoutes');

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/schemes', schemeRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));
