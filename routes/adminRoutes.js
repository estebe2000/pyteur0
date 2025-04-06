const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Dashboard admin
router.get('/', adminController.adminDashboard);

// Liste des utilisateurs
router.get('/users', adminController.listUsers);

// Ajouter un utilisateur
router.post('/users/add', adminController.addUser);

// Supprimer un utilisateur
router.post('/users/delete/:id', adminController.deleteUser);

// Modifier un utilisateur
router.post('/users/edit/:id', adminController.editUser);

module.exports = router;
