const path = require('path');
const fs = require('fs');
const User = require('../models/User');
const Classe = require('../models/Classe');
const Groupe = require('../models/Groupe');

// Dashboard admin
exports.adminDashboard = (req, res) => {
  res.render('admin');
};

// Liste des utilisateurs
exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    const classes = await Classe.findAll();
    const groupes = await Groupe.findAll();
    const niveauxPath = path.join(__dirname, '../config/niveaux.json');
    const niveaux = JSON.parse(fs.readFileSync(niveauxPath, 'utf-8'));
    const rolesPath = path.join(__dirname, '../config/roles.json');
    const roles = JSON.parse(fs.readFileSync(rolesPath, 'utf-8'));
    res.render('adminUsers', { users, classes, groupes, niveaux, roles });
  } catch (error) {
    console.error(error);
    res.render('adminUsers', { users: [], classes: [], groupes: [], niveaux: [], roles: [] });
  }
};

// Ajouter un utilisateur
exports.addUser = async (req, res) => {
  const { username, password, role, niveau, classe, groupe, besoin_particulier } = req.body;
  try {
    await User.create({ username, password, role, niveau, classe, groupe, besoin_particulier });
  } catch (error) {
    console.error(error);
  }
  res.redirect('/admin/users');
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
  }
  res.redirect('/admin/users');
};

// Modifier un utilisateur
exports.editUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, role } = req.body;
  try {
    await User.update({ username, password, role }, { where: { id } });
  } catch (error) {
    console.error(error);
  }
  res.redirect('/admin/users');
};
