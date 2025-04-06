const express = require('express');
const router = express.Router();
const metadataController = require('../controllers/metadataController');

router.get('/', metadataController.getClassesAndGroups);

module.exports = router;
