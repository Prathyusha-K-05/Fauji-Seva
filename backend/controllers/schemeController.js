//Controllers/schemeController.js
const Scheme = require('../models/Scheme');
const User = require('../models/User');

exports.applyForScheme = async (req, res) => {
  const { schemeId } = req.params;
  const user = req.user;

  const scheme = await Scheme.findById(schemeId);
  if (!scheme) return res.status(404).json({ message: 'Scheme not found' });

  // Add logic to track applications (could be a new collection or embedded array)
  // Example:
  scheme.applicants = scheme.applicants || [];
  if (scheme.applicants.includes(user._id)) {
    return res.status(400).json({ message: 'Already applied' });
  }

  scheme.applicants.push(user._id);
  await scheme.save();

  res.json({ message: 'Application submitted successfully' });
};


exports.createScheme = async (req, res) => {
  try {
    const scheme = new Scheme(req.body);
    await scheme.save();
    res.status(201).json({ message: 'Scheme created', scheme });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.editScheme = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedScheme = await Scheme.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedScheme) {
      return res.status(404).json({ message: 'Scheme not found' });
    }

    res.json({ message: 'Scheme updated successfully', scheme: updatedScheme });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getEligibleSchemes = async (req, res) => {
  try {
    const user = await User.findOne({ serviceId: req.params.serviceId });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const schemes = await Scheme.find({
      'eligibility.designation': user.designation,
      'eligibility.branch': user.branch,
      $or: [
        { 'eligibility.retiredOnly': false },
        { 'eligibility.retiredOnly': user.retired }
      ]
    });

    res.json({ user: user.name, eligibleSchemes: schemes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
