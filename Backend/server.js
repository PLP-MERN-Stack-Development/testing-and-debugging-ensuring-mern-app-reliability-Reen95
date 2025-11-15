require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Optional Sentry init
if (process.env.SENTRY_DSN) {
  const Sentry = require('@sentry/node');
  Sentry.init({ dsn: process.env.SENTRY_DSN, environment: process.env.NODE_ENV || 'production' });
  app.use(Sentry.Handlers.requestHandler());
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend (Heroku)!' });
});

// MongoDB connect (if MONGODB_URI provided)
const MONGO = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-assignment';
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected (or not required for this assignment)'))
  .catch(err => console.warn('MongoDB connect warning:', err.message));

// Sentry error handler
if (process.env.SENTRY_DSN) {
  const Sentry = require('@sentry/node');
  app.use(Sentry.Handlers.errorHandler());
}

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Export for tests
module.exports = app;
