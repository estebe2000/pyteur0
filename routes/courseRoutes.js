const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Liste des cours
router.get('/', courseController.listCourses);

// Upload d'un cours
router.post('/upload', courseController.uploadMiddleware, courseController.addCourse);

// Suppression d'un cours
router.post('/delete/:id', courseController.deleteCourse);

module.exports = router;
