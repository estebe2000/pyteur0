require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Vue engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use('/medias', express.static(path.join(__dirname, 'medias')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/basthon', express.static(path.join(__dirname, 'basthon')));

// Importer les routes
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const adminMetadataRoutes = require('./routes/adminMetadataRoutes');
const metadataRoutes = require('./routes/metadataRoutes');
const courseRoutes = require('./routes/courseRoutes');

app.use('/', userRoutes);
app.get('/eleve-dashboard', (req, res) => {
  res.render('eleve_dashboard');
});
app.use('/admin', adminRoutes);
app.use('/admin', adminMetadataRoutes);
app.use('/api/metadata', metadataRoutes);
app.use('/courses', courseRoutes);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
