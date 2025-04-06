const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Page de connexion
router.get('/', userController.showLogin);

// Soumission du formulaire de connexion
router.post('/login', userController.login);

// Espace utilisateur
router.get('/user', userController.userDashboard);

// Dashboard élève
router.get('/eleve-dashboard', (req, res) => {
  res.render('eleve_dashboard');
});

module.exports = router;
