const path = require('path');
const User = require('../models/User');

// Afficher la page de connexion
exports.showLogin = (req, res) => {
  res.render('login');
};

// Gérer la connexion
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username, password } });
    if (!user) {
      return res.render('login', { error: 'Identifiants incorrects' });
    }

    if (user.role === 'admin') {
      return res.redirect('/admin');
    } else {
      return res.redirect(`/user?username=${encodeURIComponent(user.username)}&niveau=${encodeURIComponent(user.niveau || '')}`);
    }
  } catch (error) {
    console.error(error);
    return res.render('login', { error: 'Erreur serveur' });
  }
};

// Dashboard utilisateur
exports.userDashboard = (req, res) => {
  const username = req.query.username || 'Utilisateur';
  const niveau = req.query.niveau || '';
  const role = req.query.role || 'eleve';
  res.render('user', { username, niveau, role });
};
