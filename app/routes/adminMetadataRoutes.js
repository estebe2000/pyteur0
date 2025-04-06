const express = require('express');
const router = express.Router();
const adminMetadataController = require('../controllers/adminMetadataController');

router.get('/classes-groups', adminMetadataController.showManagement);

router.post('/classes/add', adminMetadataController.addClasse);
router.post('/classes/delete/:id', adminMetadataController.deleteClasse);

router.post('/groups/add', adminMetadataController.addGroupe);
router.post('/groups/delete/:id', adminMetadataController.deleteGroupe);

module.exports = router;
