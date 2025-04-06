const sequelize = require('./models/index');
const User = require('./models/User');
const Classe = require('./models/Classe');
const Groupe = require('./models/Groupe');
const Course = require('./models/Course');
const Exercise = require('./models/Exercise');

async function init() {
  try {
    await sequelize.sync({ force: true }); // recrée la base à chaque fois
    console.log('Base synchronisée.');

    await User.bulkCreate([
      { username: 'admin', password: 'admin', role: 'admin', niveau: 'Terminale' },
      { username: 'prof', password: 'prof', role: 'professeur', niveau: '2nde' },
      { username: 'eleve', password: 'eleve', role: 'eleve', niveau: '5ème' }
    ]);

    console.log('Utilisateurs de test créés.');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

init();
