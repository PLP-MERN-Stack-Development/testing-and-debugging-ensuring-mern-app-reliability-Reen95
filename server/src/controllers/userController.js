const User = require('../models/user');

exports.createUser = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name required' });
  const user = new User({ name });
  await user.save();
  res.status(201).json(user);
};

exports.listUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
