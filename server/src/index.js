const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'test') {
  const MONGO = process.env.MONGO || 'mongodb://localhost:27017/mern-testing';
  mongoose.connect(MONGO).then(() => {
    app.listen(PORT, () => console.log(`Server listening ${PORT}`));
  }).catch(err => console.error(err));
}

module.exports = app; // exported for tests
