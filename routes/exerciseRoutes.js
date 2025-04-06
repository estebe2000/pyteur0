const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

// Lister les exercices
router.get('/', exerciseController.listExercises);

// Lancer exercice dans Basthon
router.get('/run/:id', exerciseController.runExercise);

// Ajouter un exercice
router.post('/add', exerciseController.uploadMiddleware, exerciseController.addExercise);

// Supprimer un exercice
router.post('/delete/:id', exerciseController.deleteExercise);

module.exports = router;
