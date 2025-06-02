const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { serviceId, password } = req.body;
  console.log(serviceId)
  console.log(password)

  const user = await User.findOne({ serviceId }).lean();
  console.log(JSON.stringify(user))
  console.log(typeof(password))
  console.log(typeof(user.password))
  if (!user || user.password != password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({
    message: 'Login successful',
    user: {
      name: user.name,
      serviceId: user.serviceId,
      role: user.role,
      designation: user.designation,
      branch: user.branch,
      retired: user.retired
    }
  });
};

exports.getUserByServiceId = async (req, res) => {
  try {
    const user = await User.findOne({ serviceId: req.params.serviceId });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};