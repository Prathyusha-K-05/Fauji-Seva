const User = require('../models/User');

// Simulated auth using "service-id" header
const authorize = (roles = []) => {
  return async (req, res, next) => {
    const serviceId = req.header('service-id');
    if (!serviceId) return res.status(401).json({ message: 'Missing service-id header' });

    const user = await User.findOne({ serviceId });
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    req.user = user;
    next();
  };
};

module.exports = { authorize };
