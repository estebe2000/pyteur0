const Classe = require('../models/Classe');
const Groupe = require('../models/Groupe');

exports.getClassesAndGroups = async (req, res) => {
  try {
    const classes = await Classe.findAll();
    const groupes = await Groupe.findAll();
    res.json({ classes, groupes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
