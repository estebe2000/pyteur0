const fs = require('fs');
const path = require('path');
const Classe = require('../models/Classe');
const Groupe = require('../models/Groupe');

// Afficher la page de gestion
exports.showManagement = async (req, res) => {
  try {
    const classes = await Classe.findAll();
    const groupes = await Groupe.findAll();
    const niveauxPath = path.join(__dirname, '../config/niveaux.json');
    const niveaux = JSON.parse(fs.readFileSync(niveauxPath, 'utf-8'));
    res.render('adminClassesGroups', { classes, groupes, niveaux });
  } catch (error) {
    console.error(error);
    res.render('adminClassesGroups', { classes: [], groupes: [], niveaux: [] });
  }
};

// Ajouter une classe
exports.addClasse = async (req, res) => {
  const { nom, niveau } = req.body;
  try {
    await Classe.create({ nom, niveau });
  } catch (error) {
    console.error(error);
  }
  res.redirect('/admin/classes-groups');
};

// Supprimer une classe
exports.deleteClasse = async (req, res) => {
  const { id } = req.params;
  try {
    await Classe.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
  }
  res.redirect('/admin/classes-groups');
};

// Ajouter un groupe
exports.addGroupe = async (req, res) => {
  const { nom, classeId } = req.body;
  try {
    await Groupe.create({ nom, classeId });
  } catch (error) {
    console.error(error);
  }
  res.redirect('/admin/classes-groups');
};

// Supprimer un groupe
exports.deleteGroupe = async (req, res) => {
  const { id } = req.params;
  try {
    await Groupe.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
  }
  res.redirect('/admin/classes-groups');
};
