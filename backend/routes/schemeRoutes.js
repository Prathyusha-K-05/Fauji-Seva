const express = require('express');
const router = express.Router();
const schemeController = require('../controllers/schemeController');
const { authorize } = require('../middleware/auth');

// Admin-only routes
router.post('/create', authorize(['admin']), schemeController.createScheme);
router.put('/edit/:id', authorize(['admin']), schemeController.editScheme); // <--- ADD THIS LINE

// Military-user routes
router.get('/eligible/:serviceId', schemeController.getEligibleSchemes);
router.post('/apply/:schemeId', authorize(['military']), schemeController.applyForScheme);

module.exports = router;

