const path = require('path');
const multer = require('multer');
const Course = require('../models/Course');

// Config multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Middleware upload
exports.uploadMiddleware = upload.single('pdf');

// Ajouter un cours
exports.addCourse = async (req, res) => {
const { title, description, tags } = req.body;
  const ownerId = req.body.ownerId || 1;
  try {
    await Course.create({
      title,
      description,
      tags,
      ownerId,
      proprietaire: req.body.proprietaire || 'professeur',
      filePath: '/uploads/' + req.file.filename
    });
    res.redirect('/courses?role=admin&ownerId=1');
  } catch (error) {
    console.error(error);
    res.send('Erreur upload');
  }
};

// Lister les cours (admin : tous, prof : seulement les siens)
exports.listCourses = async (req, res) => {
  const { role, ownerId } = req.query;
  try {
    let courses;
    if (role === 'admin' || role === 'professeur') {
      courses = await Course.findAll();
    } else {
      courses = await Course.findAll({ where: { ownerId } });
    }
    const username = req.query.username || 'professeur';
    res.render('courses', { courses, role, username });
  } catch (error) {
    console.error(error);
    res.send('Erreur liste');
  }
};

// Supprimer un cours
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
await Course.destroy({ where: { id } });
    res.redirect('/courses?role=admin&ownerId=1');
  } catch (error) {
    console.error(error);
    res.send('Erreur suppression');
  }
};
