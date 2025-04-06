const path = require('path');
const fs = require('fs');
const multer = require('multer');
const Exercise = require('../models/Exercise');

// Config multer avec filtre extensions code uniquement
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const allowedExtensions = ['.py', '.sql', '.ml', '.js', '.xcas'];
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Seuls les fichiers de code sont autorisés (.py, .sql, .ml, .js, .xcas)'));
  }
};

const upload = multer({ storage, fileFilter });

// Middleware upload
exports.uploadMiddleware = upload.single('codefile');

// Ajouter un exercice
exports.addExercise = async (req, res) => {
  const { title, description, tags } = req.body;
  const ownerId = req.body.ownerId || 1;
  try {
    await Exercise.create({
      title,
      description,
      tags,
      ownerId,
      proprietaire: req.body.proprietaire || 'professeur',
      filePath: '/uploads/' + req.file.filename
    });
    res.redirect('/exercises?role=admin&ownerId=1');
  } catch (error) {
    console.error(error);
    res.send('Erreur upload');
  }
};

// Lister les exercices
exports.listExercises = async (req, res) => {
  const { role, ownerId } = req.query;
  try {
    let exercises;
    if (role === 'admin' || role === 'professeur') {
      exercises = await Exercise.findAll();
    } else {
      exercises = await Exercise.findAll({ where: { ownerId } });
    }
    const username = req.query.username || 'professeur';
    res.render('exercises', { exercises, role, username });
  } catch (error) {
    console.error(error);
    res.send('Erreur liste');
  }
};

  
// Supprimer un exercice
exports.deleteExercise = async (req, res) => {
  const { id } = req.params;
  try {
    await Exercise.destroy({ where: { id } });
    res.redirect('/exercises?role=admin&ownerId=1');
  } catch (error) {
    console.error(error);
    res.send('Erreur suppression');
  }
};

// Lancer un exercice dans Basthon
exports.runExercise = async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await Exercise.findByPk(id);
    if (!exercise) {
      return res.send('Exercice non trouvé');
    }
    res.render('runExercise', { filePath: exercise.filePath });
  } catch (error) {
    console.error(error);
    res.send('Erreur lancement Basthon');
  }
};
