const User = require('../models/User');
const Exercise = require('../models/Exercise');

module.exports = {
  showLogin(req, res) {
    res.render('login');
  },

  async login(req, res) {
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
  },

  userDashboard(req, res) {
    const username = req.query.username || 'Utilisateur';
    const niveau = req.query.niveau || '';
    const role = req.query.role || 'eleve';
    res.render('user', { username, niveau, role });
  },

  async eleveExercises(req, res) {
    try {
      const exercises = await Exercise.findAll();
      res.render('eleve_exercises', { exercises });
    } catch (error) {
      console.error(error);
      res.send('Erreur chargement exercices');
    }
  }
};
